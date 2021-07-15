#######################################################################
# CI not set indicates console execution
# If running from console check for "any param" indicates staging
#######################################################################

if [[ -z "${CI}" ]]; then
    export CI=true
    if [[ $# -eq 1 ]]; then
        testspace config url https://$STRIDESPACE_TOKEN:@s2.stridespace.com
    else
        testspace config url https://$TESTSPACE_TOKEN:@s2.testspace.com
    fi
fi

export RESULTS_PATH="./fake.results"
# Push 5 Results to "resolve" all failures being tracked
for i in {0..5}
do
    RESULT_NAME="build."$( date '+%F_%H:%M:%S' )
    testspace ?start#$RESULT_NAME
    testspace @fake.results/result.pass.txt ?finish#$RESULT_NAME
done

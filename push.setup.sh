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
# Push 4 Results to "setup" different types of failing tests
RESULT_NAME="build."$( date '+%F_%H:%M:%S' )
testspace ?start#$RESULT_NAME
testspace @fake.results/result.set1.txt ?finish#$RESULT_NAME

RESULT_NAME="build."$( date '+%F_%H:%M:%S' )
testspace ?start#$RESULT_NAME
testspace @fake.results/result.set2.txt ?finish#$RESULT_NAME

RESULT_NAME="build."$( date '+%F_%H:%M:%S' )
testspace ?start#$RESULT_NAME
testspace @fake.results/result.set3.txt ?finish#$RESULT_NAME

RESULT_NAME="build."$( date '+%F_%H:%M:%S' )
testspace ?start#$RESULT_NAME
testspace @fake.results/result.set4.txt ?finish#$RESULT_NAME


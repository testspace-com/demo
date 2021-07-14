export CI=true
export RESULTS_PATH="./fake.results"
#testspace config url https://$TESTSPACE_TOKEN:@s2.$TESTSPACE_DOMAIN.com

for i in {0..5}
do
    RESULT_NAME="build."$( date '+%F_%H:%M:%S' )
    testspace ?start#$RESULT_NAME
    testspace @fake.results/result.pass.txt ?finish#$RESULT_NAME
done

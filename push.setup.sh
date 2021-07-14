export CI=true
export RESULTS_PATH="./fake.results"
#testspace config url https://$TESTSPACE_TOKEN:@s2.$TESTSPACE_DOMAIN.com

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


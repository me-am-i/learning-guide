echo '输入1到4之间是数字：'
echo '你输入的数字为：'
read aNum
case $aNum in
  1)  echo '你选择了1'
  ;;
  2)  echo '你选择了2'
  ;;
  3)  echo '你选择了3'
  ;;
  4)  echo '你选择了4'
  ;;
  *)  echo '你没有输入1到4之间的数字'
  ;;
esac

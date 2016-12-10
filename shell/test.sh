#!/bin/bash

num1=100
num2=100
if test $[ num1 ] -eq $[ num2 ]
then
  echo 'num1 eq num2'
else
  echo 'num1 ne num2'
fi

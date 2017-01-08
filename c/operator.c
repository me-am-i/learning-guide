#include <stdio.h>

int main ()
{
  int a = 4;
  short b;
  double c;
  int* ptr;

  printf("Line 1 - 变量 a 的大小 = %lu \n", sizeof(a));
  printf("Line 2 - 变量 b 的大小 = %lu \n", sizeof(b));

  ptr = &a;
  printf("a 的值是 %d \n", a);
  printf("*ptr 是 %d \n", *ptr);
}

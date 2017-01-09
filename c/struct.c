#include <stdio.h>
#include <string.h>

struct Books
{
  char title[50];
  char author[50];
  char subject[100];
  int book_id;
};

int main ()
{
  struct Books Book1;
  struct Books Book2;

  strcpy(Book1.title, "C Programming");
  strcpy(Book1.author, "Nuha Ali");
  strcpy(Book1.subject, "C Progrmming Tutorial");
  Book1.book_id = 6495407;

  strcpy(Book2.title, "Telecom Billing");
  strcpy(Book2.author, "Zara Ali");
  strcpy(Book2.subject, "Telecom Billing Tutorial");

  printf("Book1 title: %s \n", Book1.title);
  printf("Book1 author: %s \n", Book1.author);
  printf("Book1 subject: %s \n", Book1.subject);

  printf("Book2 title: %s \n", Book2.title);
  printf("Book2 author: %s \n", Book2.author);
  printf("Book2 subject: %s \n", Book2.subject);

  return 0;
}

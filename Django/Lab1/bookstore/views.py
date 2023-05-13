from django.shortcuts import render, redirect
from django.http import HttpResponse, JsonResponse, HttpResponseRedirect

# Create your views here.
def index(request):
    return render(request, 'main/base_layout.html')


book_list = [
    {
        'index': 0,
        'id': 1,
        'Title': '50 Laws of power',
        'Author': 'Robert Greene',
        'Genre': "Human",
    },
    {
        'index': 1,
        'id': 2,
        'Title': 'Harry Potter',
        'Author':'J.K Rowling',
        'Genre': "Fiction",
    },
    {
        'index': 2,
        'id': 3,
        'Title': 'Song Of Ice and fire',
        'Author': 'George Martin',
        'Genre': "Action ",
    },
]


def _get_book(book_id):
    for book in book_list:
        if 'id' in book and book['id'] == book_id:
            return book
    return None
    
def bookstore_list(request):
    my_context = {'book_list': book_list}
    # template_loader > todo/templates/
    return render(request, 'bookstore/books_list.html', context=my_context)

def bookstore_detail(request, *args, **kwrgs):
    book_id = kwrgs.get('book_id')
    book_object = _get_book(book_id)
    my_context = {
        'book_id': book_object.get('id'),
        'book_title': book_object.get('Title'),
        'book_author': book_object.get('Author'),
        'book_genre': book_object.get('Genre')
    }

    return render(request, 'bookstore/book_details.html', context=my_context)


def bookstore_delete(request, **kwargs):
    book_id = kwargs.get('book_id')
    book_object = _get_book(book_id)
    if book_list:
        book_list.remove(book_object)
    return redirect('bookstore:bookstore-list')   

def bookstore_update(request, **kwargs):
    book_id = kwargs.get('book_id')
    book_object = _get_book(book_id)
    for book in book_list:
        if book == book_object:
            book['Author'] = f"Update {book_object['Author']}"
            
    return redirect('bookstore:bookstore-list') 

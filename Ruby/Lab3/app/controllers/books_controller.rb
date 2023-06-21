class BooksController < ApplicationController
  http_basic_authenticate_with name: "admin", password: "admin"



  def index
    @books = Book.all
  end
  
  def show
    @books = Book.find(params[:id])
  end

  def new 
    
    @books = Book.new

  end

  def create 
    @books = Book.new(product_params)
    
    if @books.save
      redirect_to @book
    else
      @books.errors.full_messages
    end  
  end 

  def edit
    @book = Book.find(params[:id])
  end

  def update
    @book = Book.find(params[:id])
    
    if @book.update(product_params)
      redirect_to @book
    else
      render :new, status: :unprocessable_entity 
    end  
  
  end

  def destroy
    @book = Book.find(params[:id])
    @book.destroy

    redirect_to root_path, status: :see_other
  end  

  private
    def book_params
      params.require(:book).permit(:name, :image, :price, :description,:user_id)
    end
end

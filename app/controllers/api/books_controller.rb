class Api::BooksController < ApiController
  before_action :set_list
  before_action :set_book, only: [:show, :update, :destroy]

  def index
    @books = @list.books
    render json: @books
  end

  def show
    render json: @book
  end

  def create
    @book = @list.books.new(book_params)

    if @book.save
      render json: @book, status: :created
    else
      render json: @book.errors, status: :unprocessable_entity
    end
  end

  def update
    if @book.update(book_params)
      render json: @book
    else
      render json: @book.errors, status: :unprocessable_entity
    end
  end

  def destroy
    @book.destroy
  end

  private

  def set_list
    @list = List.find_by(user_id: params[:user_id], id: params[:list_id])
  end

  def set_book
    @book = @list.books.find(params[:id])
  end

  def book_params
    params.require(:book).permit(:title, :author, :status, :total_pages, :current_page)
  end
end
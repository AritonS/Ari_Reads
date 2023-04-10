class Api::ListsController < ApiController
  before_action :set_list, only: [:show, :update, :destroy]

  def index
    @lists = User.find(params[:user_id]).lists
    render json: @lists
  end

  def create
    @list = List.new(user_id: params[:user_id])

    if @list.save
      render json: @list, status: :created
    else
      render json: @list.errors, status: :unprocessable_entity
    end
  end

  def show
    render json: @list
  end

  def update
    if @list.update(list_params)
      render json: @list
    else
      render json: @list.errors, status: :unprocessable_entity
    end
  end

  def destroy
    @list.destroy
  end

  private

  def set_list
    @list = List.find(params[:id])
  end

  def list_params
    params.require(:list).permit()
  end
end
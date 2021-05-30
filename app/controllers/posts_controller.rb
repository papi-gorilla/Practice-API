class PostsController < ApplicationController
  def new

  end

  def create

  end

  def index
    @posts=Post.all

  end

  def show

  end

  def edit

  end

  def update

  end

  def destroy

  end

  private
  def post_params
    params.require(:post).permit(:name, :content)
  end

end

class PostsController < ApplicationController
  def new

  end

  def create

  end

  def index
    @post=Post.all
    gon.post = @post
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
    params.require(:post).permit(:name, :address)
  end

end

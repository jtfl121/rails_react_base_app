class UsersController < ApplicationController

  def get_users
    render :json => User.all
  end

  def get_user
    render :json => User.where(id: params[:id])
  end

  def show
    #
  end
end

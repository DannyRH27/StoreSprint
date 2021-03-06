class Api::UsersController < ApplicationController
  def create
    @user = User.new(user_params)

    if @user.save
      login!(@user)
      @cart = Cart.create(customer_id: @user.id)
      render 'api/users/show'
    else
      render json: ['Invalid Signup Credentials'], status: 401
    end
  end

  def show
    @user = current_user
  end

  def update
    @user = current_user
    p params[:user][:email]
    if @user.email == 'demo@gmail.com' && params[:user][:email] != 'demo@gmail.com'
      render json: ['Please do not update the demo user email.'], status: 401
    elsif @user && @user.update_attributes(user_params)
      @user.phone_number = params[:user][:phoneNumber]
      @user.save
        render 'api/users/show'
    elsif !@user
        render json: ['User not found'], status: 404
    else
        render json: @user.errors.full_messages, status: 404
    end
  end

  def destroy
    @user = current_user
    if @user
        @user.destroy
        render :show
    else
        render ['Could not find user']
    end
  end


  private

  def user_params
    params.require(:user).permit(:fname, :lname, :phone_number, :email, :password, :address, :current_order)
  end

end

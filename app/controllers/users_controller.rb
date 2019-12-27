class UsersController < ApplicationController
    def index
    end

    def login_submit
        email, password = params.values_at :email, :password

        redirect_to user_page_path(:id => "2") #action: 'show', id: 2 #user.id
        # if (user = User.find_by_email(email)&.authenticate(password))
        #   response.headers["X-Access-Token"] = token_manager.build(user.id)
        #   redirect_to action: 'show', id: user.id
        # else
        #   render json: {
        #     message: "username or password is incorrect.",
        #     email: email
        #   }, status: :unauthorized
        # end
    end

    def show
        @pages = [{display_name: "Schools"}, {display_name: "Hours Details"}, {display_name: "My Class Periods"}, {display_name: "Program Resources"} ]
        @user = { first_name: "Lauren", last_name: "Shultz", total_hours: 17.0, profile_url: "https://avatars0.githubusercontent.com/u/35083101?s=460&v=4" }
    end
end
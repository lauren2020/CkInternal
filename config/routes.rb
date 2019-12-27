Rails.application.routes.draw do
  root 'users#index'
  resources :class_periods
  get 'login/submit', to: 'users#login_submit'
  get 'user/:id', to: 'users#show', as: :user_page

  get 'user/:id/schools', to: 'users#show'
  get 'user/:id/hours', to: 'users#show'
  get 'user/:id/class_periods', to: 'users#show'
  get 'user/:id/program_resources', to: 'users#show'

  namespace :api do
    namespace :v1, defaults: {format: 'json'} do
      get 'class_periods', to: 'class_periods#index'
      get 'schools', to: 'schools#index'
      get 'staff', to: 'staff#index'
      post 'class_periods', to: 'class_periods#create'
    end
  end
end

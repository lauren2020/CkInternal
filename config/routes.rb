Rails.application.routes.draw do
  root 'home#index'
  resources :class_periods
  namespace :api do
    namespace :v1, defaults: {format: 'json'} do
      get 'class_periods', to: 'class_periods#index'
      get 'schools', to: 'schools#index'
      get 'staff', to: 'staff#index'
      post 'class_periods', to: 'class_periods#create'
    end
  end
end

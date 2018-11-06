Rails.application.routes.draw do
  # resources :users
  root to: "pages#root"
  get 'about_us', to: 'pages#root'

  get 'get_users', to: 'users#get_users'
  get 'get_user', to: 'users#get_user'
  get 'users/:id', to: 'pages#root'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end

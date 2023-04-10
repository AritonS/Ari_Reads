Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  
  root 'static_pages#root'

  namespace :api, defaults: {format: :json} do
    resources :users do
      resources :lists do
        resources :books
      end
    end
    resource :session
  end
end
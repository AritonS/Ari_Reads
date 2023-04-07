Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  namesapce :api, defaults: {format: :json} do
    resources :users
    resources :session
  end

  root 'static_pages#root'
end

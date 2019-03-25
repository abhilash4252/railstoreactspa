Rails.application.routes.draw do
  get 'audience/index'
  get  '/partners/:id', as: 'show_partner', to: 'partners#show'
  get  '/partners', as: 'all_partners', to: redirect('/')
  root 'application#home'

  namespace :api, defaults: { format: 'json' }  do
    get '/partners', to: 'partners#index'
  end
end

Rails.application.routes.draw do
  get '/audience', to: 'application#home' 
  get  '/partners/:id', to: 'application#home'
  get  '/partners', to: redirect('/')
  root 'application#home'

  namespace :api, defaults: { format: 'json' }  do
    get '/partners', to: 'partners#all_partners'
    get '/audience', to: 'audience#all_audience'
  end 
end

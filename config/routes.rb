Rails.application.routes.draw do
  get 'partners/index'
  get 'partners/show'
  get 'audience/index'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  get  '/partners/:id', as: 'show_partner', to: 'partners#show'
  get  '/partners', as: 'all_partners', to: 'partners#index'
  root 'partners#index'
end

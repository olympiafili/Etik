Rails.application.routes.draw do

  get 'orders/download_files'
  get 'orders/destroy_files'
  resources :orders

  devise_for :users
  get 'etic/home'
  get 'etic/material'
  get 'etic/kataskevastes'
  get 'etic/system'
  get 'etic/line'
  get 'etic/leaf'
  get 'etic/open_type'
  get 'etic/anoigma'
  get 'etic/elefthero'
  get 'etic/color'
  get 'etic/corol_kasas'
  get 'etic/color_fulou'
  get 'etic/diastaseis'
  get 'etic/diastaseis_fix'
  get 'etic/extra'
  get 'etic/door'
  get 'etic/profil'
  get 'etic/tzamia'
  get 'etic/epikathimena'
  get 'etic/window_still_sub_cats'
  get 'etic/window_stills'
  get 'etic/color_epikathimenou'
  get 'etic/color_eksoterikou'
  get 'etic/eksoterika'
  get 'etic/color_persidas'
  get 'etic/upologismos'
  get 'etic/typos'
  get 'etic/color_typos'
  get 'etic/color_odoigou'
  get 'etic/color_profil'
  get 'etic/profil'
  get 'etic/upologismos_platos_profil'
  get 'etic/upologismos_upsos_profil'
  get 'etic/color_epistrofi'
  get 'etic/price'
  get 'etic/price_door'
  get 'etic/card'
  get 'etic/pdf'
  get 'etic/export'
  delete 'etic/destroy'
  put 'etic/update'
  get 'etic/diagrafi'
  get 'etic/prosthiki_sto_kalathi'
  get 'etic/etic_card'
  get 'etic/etic_user_card'
  get 'etic/etic_pse_user_card'
  get 'etic/new_user'
  get 'etic/add_user'
  get 'etic/diagrafi_admin'
  get 'etic/update_admin'
  get 'etic/export_admin'
  get 'etic/pdf_admin'
  get 'etic/pse_done'
  get 'etic/contact'
  get 'etic/send_mail'
  get 'etic/send_mail_csv'
  get 'etic/pse_user'
  get 'etic/user_diax'
  get 'etic/simple_user_cr'
  get 'etic/add_simple_user'
  get 'etic/simple_pse_user_card'
  get 'etic/oloklirwsi_simple_user_pses'
  get 'etic/simple_pse_user'
  get 'etic/simple_pse_user_door'
  get 'etic/diagrafi_simple_user'
  get 'etic/pdf_simple_user'
  get 'etic/pdf_simple_customer'
  get 'etic/export_simple_user'
  post 'etic/save_image'
  get 'etic/save_image'
  post 'etic/save_imagebase64'
  get 'etic/save_imagebase64'
  get 'etic/select_customer'
  get 'etic/new_offer'
  get 'etic/import_terms'
  get 'etic/import_sungate'
  get 'etic/history'
  get 'etic/history_admin'
  get 'etic/extra_json'
  get 'etic/door_json'
  get 'etic/update_sxolia'
  get 'etic/update_pososto'
  get 'etic/update_pososto_sun'
  get 'etic/leaf2'
  get 'etic/export_order'
  get 'etic/cat_panels'
  get 'etic/panels'
  get 'etic/import_colors'
  get 'etic/import_systems'
  get 'etic/import_lines'
  get 'etic/import_additional_objects'
  get 'etic/import_glasses_panels'
  get 'etic/import_window_stills'
  get 'etic/import_rolls'
  
  get 'data_base_in_out/users'
  get 'data_base_in_out/dashboard'
  get 'data_base_in_out/find_user'
  get 'data_base_in_out/update_user'
  get 'data_base_in_out/clients'
  get 'data_base_in_out/add_users'
  get 'data_base_in_out/main_controll_panel'
  
  get 'order/edit'
  #root 'etic#home'
  get 'etic/language'
  devise_scope :user do
    root :to => 'devise/sessions#new'
  end
  get 'paraggelia/download_files'
  get 'paraggelia/destroy_files'
  resources :paraggelia

  mount TranslationCenter::Engine => "/translation_center"
  # The priority is based upon order of creation: first created -> highest priority.
  # See how all your routes lay out with "rake routes".

  # You can have the root of your site routed with "root"
  # root 'welcome#index'

  # Example of regular route:
  #   get 'products/:id' => 'catalog#view'

  # Example of named route that can be invoked with purchase_url(id: product.id)
  #   get 'products/:id/purchase' => 'catalog#purchase', as: :purchase

  # Example resource route (maps HTTP verbs to controller actions automatically):
  #   resources :products

  # Example resource route with options:
  #   resources :products do
  #     member do
  #       get 'short'
  #       post 'toggle'
  #     end
  #
  #     collection do
  #       get 'sold'
  #     end
  #   end

  # Example resource route with sub-resources:
  #   resources :products do
  #     resources :comments, :sales
  #     resource :seller
  #   end

  # Example resource route with more complex sub-resources:
  #   resources :products do
  #     resources :comments
  #     resources :sales do
  #       get 'recent', on: :collection
  #     end
  #   end

  # Example resource route with concerns:
  #   concern :toggleable do
  #     post 'toggle'
  #   end
  #   resources :posts, concerns: :toggleable
  #   resources :photos, concerns: :toggleable

  # Example resource route within a namespace:
  #   namespace :admin do
  #     # Directs /admin/products/* to Admin::ProductsController
  #     # (app/controllers/admin/products_controller.rb)
  #     resources :products
  #   end
end

Rails.application.routes.draw do
  resources :surveys

  namespace :api do
    namespace :v1 do
      resources :surveys, only: [] do
        
        collection do
          get :add_question
          get :add_answer
          post :add_survey
          post :save_answer
          post :save_question
        end
      end
    end
  end

  root "surveys#index"
end

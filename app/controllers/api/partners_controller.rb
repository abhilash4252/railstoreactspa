class Api::PartnersController < ApplicationController
    def index
      @partners = Partner.all
      respond_to do |format|
        format.json { render :json => @partners }
      end
    end
  
    def show
      @partner = Partner.find(params[:id])
    end
  end
  
class Api::PartnersController < ApplicationController
    def all_partners
      @partners = Partner.all
      respond_to do |format|
        format.json { render :json => @partners }
      end
    end
  end
  
class Api::AudienceController < ApplicationController
    def all_audience
      @audience = Audience.all
      respond_to do |format|
        format.json { render :json => @audience }
      end
    end
  end
  
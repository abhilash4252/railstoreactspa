class AudienceController < ApplicationController
  def index
    @audience = Audience.all
  end
end

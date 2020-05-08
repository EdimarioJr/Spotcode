class Api::V1::RecentlyHeardsController < ApplicationController
    skip_before_action :verify_authenticity_token
    def create
        current_user.recently_heards.create(album_id: params[:album_id])
    end
end

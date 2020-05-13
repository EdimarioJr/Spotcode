class Api::V1::FavoritesController < ApplicationController
    skip_before_action :verify_authenticity_token
    def index
        @favorites_albums = current_user.favorites.where(favoritable_type: "Album").map(&:favoritable)
        @favorites_songs = current_user.favorites.where(favoritable_type: "Song").map(&:favoritable)
        @favorites_artists = current_user.favorites.where(favoritable_type: "Artist").map(&:favoritable)
    end

    def create
        current_user.favorites.create(favoritable_type: params[:favoritable_type],favoritable_id: params[:id])
    end

    def delete
        @destroy_favorite = current_user.favorites.find_by(favoritable_type: params[:favoritable_type],favoritable_id: params[:id])
        @destroy_favorite.destroy
    end
end

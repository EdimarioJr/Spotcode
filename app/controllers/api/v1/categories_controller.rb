class Api::V1::CategoriesController < ApplicationController
    def index
        @categories = Category.all.distinct
    end

    def show
        @category = Category.find(params[:id])
    end
end

class ApplicationController < ActionController::Base
    protect_from_forgery unless: -> {request.format.json? }
    before_action :authenticate_user! unless: -> {request.env['PATH_INFO'] == '/'}
end

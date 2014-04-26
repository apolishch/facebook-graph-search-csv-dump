class HomeController < ApplicationController
  def index
    render template: 'home/index', layout: 'application'
  end
end

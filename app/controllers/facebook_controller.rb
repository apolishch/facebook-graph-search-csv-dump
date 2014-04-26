require 'csv'
class FacebookController < ApplicationController
  
  respond_to :json

  def search
    @rest = Koala::Facebook::API.new(params['token'])
    results = @rest.search(params['business'], {type: 'place',center: "#{params['locale']['lat']},#{params['locale']['lng']}", distance: 10000}) 
    path = (params['path']) ? params['path'] : "/home/#{ENV['USER']}/results.csv"
    csv_string = CSV.generate do |csv|
      results.each do |hash|
        csv << hash.values
      end
    end
    file = File.open(path, 'w') {|f| f.write(csv_string)}
    flash[:notice] = "Your result has been written to the file #{path}"
    redirect_to root_path
  end
    
end


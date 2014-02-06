class Todo < ActiveRecord::Base
  def self.create_from_ajax(ajax_params)
    new_params = symbolize_keys(ajax_params)
    puts "new_params is #{new_params}"
    create(new_params)
  end

  def self.symbolize_keys(myhash)
    myhash.keys.each do |key|
      myhash[(key.to_sym rescue key) || key] = myhash.delete(key)
    end
  end

end

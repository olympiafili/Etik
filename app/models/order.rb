class Order < ActiveRecord::Base

	belongs_to :paraggelia

	mount_uploaders :avatar, AvatarUploader

	def self.to_csv(options = {:col_sep => ";"})
    CSV.generate(options) do |csv|
      csv << ["id", "User", "Height", "Width"]
      all.each do |order|
        csv << [order.id, order.user_id, order.height, order.width]
      end
    end
  end

end

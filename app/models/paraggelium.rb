class Paraggelium < ActiveRecord::Base
	mount_uploaders :avatar, AvatarUploader
end

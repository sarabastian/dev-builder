class ApplicationController < ActionController::API
 
  def home
    render json: {message: 'Server is up!'}
  end
  
  def current_user
    token = request.headers['auth-key']
    begin
      
      payload = JWT.decode(token,'Phase4', true, algorithm: 'HS256')
      
      user = User.find_by(id: payload[0]['user_id'])
    rescue JWT::DecodeError
      nil
    end

  end







  # def auth_header
  #   request.headers['token']
  # end

  # def decoded_token
  #   if auth_header
  #     token = auth_header.split(' ')[1]
  #     begin
  #       JWT.decode(token, 'my_s3cr3t', true, algorithm: 'HS256')
  #     rescue JWT::DecodeError
  #       nil
  #     end
  #   end
  # end
  # def encode_token(payload)
  #   JWT.encode(payload, 'my_secret')
  # end

  # def session_user
  #   decoded_hash = decoded_token 
  #   if !decoded_hash.empty?
  #     user_id = decoded_hash[0]['user_id']
  #     user = User.find_by(id: user_id)
  #   else
  #     nil
  #   end
  # end

  # def auth_header
  #   request.headers['Authorization']
  # end

  # def decoded_token
  #   if auth_header 
  #     token = auth_header.split(' ')[1]
  #     begin
  #       JWT.decode(token, 'my_secret', true, algorithm: 'HS256')
  #     rescue JWT::DecodeError 
  #       []
  #     end
  #   end
  # end

end

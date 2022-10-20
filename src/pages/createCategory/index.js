import React, { useState } from 'react'
import { notification, Input, Button, Form, Checkbox, Select, Avatar as Avatar2 } from 'antd'


import Avatar from 'react-avatar-edit'



export default function ChatPage() {
  
  const [formValues, setFormValues] = useState({})
  const [avatarPreview, setAvatarPreview] = useState(null)
  const [avatarSrc, setAvatarSrc] = useState(null)
  const [phoneNumber, setPhoneNumber] = useState(null)


  const onAvatarClose = () => {
    setAvatarPreview(null)
  }

  const onAvatarCrop = preview => {
    setAvatarPreview(preview)
  }

  const onAvatarBeforeFileLoad = elem => {
    console.log('elem.target.files[0].size =-=-=', elem.target.files[0].size / 1024)
    if (elem.target.files[0].size > 1451680) {
      alert('File is too big!')
      elem.target.value = ''
    }
  }

  return (
    <Form.Item name="avatar">
      <Avatar
        height={295}
        onCrop={onAvatarCrop}
        onClose={onAvatarClose}
        onBeforeFileLoad={onAvatarBeforeFileLoad}
        src={avatarSrc}
      />
      {avatarPreview && (
        <div className="text-center mt-2">
          <img src={avatarPreview} alt="Preview" />
        </div>
      )}
    </Form.Item>
  )
}

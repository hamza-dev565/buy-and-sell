import React, {useState} from 'react'
import { FormattedMessage } from 'react-intl'
import { Input, Button, Radio, Form, Tooltip, Avatar ,Modal, Upload} from 'antd'
import { Link, useHistory } from 'react-router-dom'

import { PlusOutlined } from '@ant-design/icons';

// import Modal from '../../components/modal/modal'
import style from './style.module.scss'

const getBase64 = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onload = () => resolve(reader.result);

    reader.onerror = (error) => reject(error);
  });


const  Createproduct = props =>{
    const [previewOpen, setPreviewOpen] = useState(false);
    const [previewImage, setPreviewImage] = useState('');
    const [previewTitle, setPreviewTitle] = useState('');
  const onFinish = values => {
    // dispatch({
    //   type: actions.LOGIN,
    //   payload: values,
    // })
  }

  const onFinishFailed = errorInfo => {
    // console.log(' this why you Failed harry:', errorInfo)
  }
  const [fileList, setFileList] = useState([
    {
      uid: '-1',
      name: 'image.png',
      status: 'done',
      url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    },
    {
      uid: '-2',
      name: 'image.png',
      status: 'done',
      url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    },
    {
      uid: '-3',
      name: 'image.png',
      status: 'done',
      url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    },
    {
      uid: '-4',
      name: 'image.png',
      status: 'done',
      url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    },
    {
      uid: '-xxx',
      percent: 50,
      name: 'image.png',
      status: 'uploading',
      url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    },
    {
      uid: '-5',
      name: 'image.png',
      status: 'error',
    },
  ]);

  const handleCancel = () => setPreviewOpen(false);

  const handlePreview = async (file) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }

    setPreviewImage(file.url || file.preview);
    setPreviewOpen(true);
    setPreviewTitle(file.name || file.url.substring(file.url.lastIndexOf('/') + 1));
  };

  const handleChange = ({ fileList: newFileList }) => setFileList(newFileList);

  const uploadButton = (
    <div>
      <PlusOutlined />x``
      <div
        style={{
          marginTop: 8,
        }}
      >
        Upload
      </div>
    </div>
  );
  return (
    <>
      <div
        className={{
          display: 'grid',
          'grid-template-columns': '1fr 1fr',
          height: '89vh',
        }}
      >
        <Upload
          action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
          listType="picture-card"
          fileList={fileList}
          onPreview={handlePreview}
          onChange={handleChange}
        >
          {fileList.length >= 8 ? null : uploadButton}
        </Upload>
        <Modal open={previewOpen} title={previewTitle} footer={null} onCancel={handleCancel}>
          <img
            alt="example"
            style={{
              width: '100%',
            }}
            src={previewImage}
          />
        </Modal>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <div style={{ width: '500px' }}>
            <div className="text-dark font-size-32 mb-3">
              {' '}
              <strong>
                <FormattedMessage id="signIn.welcome" />
              </strong>
            </div>
            <div className="mb-4">
              <FormattedMessage id="signIn.fillCredentials" />
            </div>
            <Form
              layout="vertical"
              hideRequiredMark
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              className="mb-4"
              // initialValues={{ email: 'demo@sellpixels.com', password: 'demo123' }}
            >
              <Form.Item
                name="email"
                rules={[{ required: true, message: 'Please input your e-mail address' }]}
              >
                <Input
                  size="large"
                  placeholder="Email/Username"
                  style={{ borderRadius: '0.5vw' }}
                />
              </Form.Item>
            </Form>
          </div>
        </div>
      </div>
    </>
  )
}
export default Createproduct

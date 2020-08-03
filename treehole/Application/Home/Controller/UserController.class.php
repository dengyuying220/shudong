<?php
namespace Home\Controller;

use Think\Controller;
class UserController extends BaseController {

    public function enroll () {

        $return_data = array();
        if (!$_POST['username']||!$_POST['phone']||!$_POST['password']||!$_POST['confpassword']) {
            
            $return_data['error_code'] = 1;
            $return_data['msg'] = "参数不足两次密码不一致"
            $this->ajaxReturn($return_data);
        } else if ($_POST['password'] != $_POST['confpassword']) {
            $return_data['error_code'] = 2;
            $return_data['msg'] = ""
            $this->ajaxReturn($return_data);
        } else if ($User->where($_POST['phone'])->find()){
            $return_data['msg'] = "该手机号已被注册";
            $this->ajaxReturn($return_data);
        } else if {
            $data = array();
            $data['username'] = $_POST['username'];
            $data['phone'] = $_POST['phone'];
            $data['password'] = md5($_POST['username']);
            $data['face_url'] = $_POST['face_url'];

            $result = $User->add($data);

            if ($result) {

            } else {
                $return_data['error_code'] = 4;
                $return_data['msg'] = "注册失败";
                $this->ajaxReturn($return_data);
            }
        }

        /* $where = array();
        $where['phone'] = $_POST['phone'];
        $user = ;
         */

       /*  $User = M("User");

        $data = array();
        $data["username"] = "李四";
        $data["phone"] = "13555555555";
        $data["password"] = "lisi";
        $data["face_url"] = "/img/132.jpg";
        
        $result = $User->add($data);
        var_dump($result);
        var_dump($User->getLastSql()); */
    }
}

?>
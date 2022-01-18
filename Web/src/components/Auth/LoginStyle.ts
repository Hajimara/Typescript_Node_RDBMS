import styled from "styled-components";

// 위에서 받은 `normalize`로 기본 css가 초기화 합니다.
const LoginStyle = styled.div`
  height: inherit;

  .logo-root {
    position: absolute;
    top: 50px;
    left: 60px;

    div {
      width: 40px;
      height: 40px;
    }
  }

  .login-root {
    display: flex;
    height: inherit;

    .login-sidebar {
      display: flex;
      margin: 16px 0 16px 16px;
      border: 1.5px solid rgba(185, 185, 185, 0.15);
      border-radius: 8px;
      
      box-shadow: rgb(145 158 171 / 20%) 0px 0px 2px 0px,
      rgb(145 158 171 / 12%) 0px 12px 24px -4px;

      .side-wrapper {
        margin: auto 0;
      }
    }
  }

  .side-title {
    margin: 0 auto;

    h3 {
      font-size: 34px;
      margin: 30px 0;
      padding: 0 0 0 50px
    }
  }

  .side-image > img {
    width: 463px;
    height: 348px;
  }

  .login-form {
    display: flex;
    max-width: 480px;
    width: Calc(100% - 463px);
    height: 100%;
    padding: 96px 0px;
    flex-direction: column;
    justify-content: center;
    margin: 0 auto;

    .form-wrapper > div {
      margin-bottom: 15px;
    }
    
    .form-wrapper {

      .form-title {
        h1 {
          margin-bottom: 10px;
        }
        p {
          font-size: 20px;
        }
      }
      .form-title-sub {
        display: flex;
        align-items: center;
        justify-content: center;
        
        height: 50px;
        border-radius: 8px;                
        background-color: rgb(208, 242, 255);
        color: rgb(4, 41, 122);
        
      }
      .form-input > div{
        margin-bottom: 15px;
      }
      
      .form-input {
        display: flex;
        flex-direction: column;

        .form-input-id-pw {
          display: flex;
          flex-direction: column;
          
          .form-input-wrapper {
            position: relative;
            width: 100%;
            margin-bottom: 10px;
            
            label {
              position: absolute;
              font-size: 12px;
              top: 3px;
              left: 10px;
              color: rgb(145, 158, 171);
            }
            input {
              border: rgb(145, 158, 171) solid 1px;
              border-radius: 8px;
              width: 100%;
              height: 50px;
              padding: 5px 0 0 10px;
              letter-spacing: 1.14px;
            }
          }
        }
        
        .form-input-remember {
          display: flex;
          height: 30px;
          align-items: center;   
          
          
        }
        
        .form-button-login {

          #login-button {
            width: 100%;
            height: 50px;
            border-radius: 8px;
            border: transparent;
            background-color: rgb(0, 171, 85);
            box-shadow: rgb(0 171 85 / 24%) 0px 8px 16px 0px;
            color: #fff;
            font-size: 18px;
            &:hover {
              background-color: rgb(0, 123, 85);
              box-shadow: none;
              cursor: pointer;
              transition: 
                      background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, 
                      box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, 
                      border-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
            }
          }
        }
      }
    }
  }
`;

export default LoginStyle;

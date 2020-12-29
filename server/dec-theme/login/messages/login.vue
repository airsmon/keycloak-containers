<!--
 * @Author: zj.wang
 * @Date: 2020-12-28 15:35:25
 * @LastEditors: zj.wang
 * @LastEditTime: 2020-12-28 17:09:59
 * @Description: 
-->
<template>
  <div>
    <el-if section = "form">
      <div class="login-container">
          <div class="login-content">
            <div class="loogin-image">
              <svg data-v-c8a70580="" data-v-37dfd6fc="" aria-hidden="true" class="svg-icon"><use data-v-c8a70580="" xlink:href="#icon-login-image"></use></svg>
            </div>
            <div class="login-wrap">
              <div class="logo">
                <svg data-v-c8a70580="" data-v-37dfd6fc="" aria-hidden="true" class="svg-icon"><use data-v-c8a70580="" xlink:href="#icon-daocloud"></use></svg>
              </div>
              <div class="login-box">
                <!--form-->
                <div id="kc-form">
                  <div id="kc-form-wrapper">
                    <el-if realm.password>
                        <form id="kc-form-login" onsubmit="login.disabled = true; return true;" action="${url.loginAction}" method="post">
                            <div class="${properties.kcFormGroupClass!}">
                                <label for="username" class="${properties.kcLabelClass!}"><#if !realm.loginWithEmailAllowed>${msg("username")}<#elseif !realm.registrationEmailAsUsername>${msg("usernameOrEmail")}<#else>${msg("email")}</#if></label>

                                <el-if usernameEditDisabled??>
                                    <input tabindex="1" id="username" class="${properties.kcInputClass!}" name="username" value="${(login.username!'')}" type="text" disabled />
                                <el-else>
                                    <input tabindex="1" id="username" class="${properties.kcInputClass!}" name="username" value="${(login.username!'')}"  type="text" autofocus autocomplete="off"
                                        aria-invalid="<#if messagesPerField.existsError('username','password')>true</#if>"
                                    />

                                    <el-if messagesPerField.existsError('username','password')>
                                        <span id="input-error" class="${properties.kcInputErrorMessageClass!}" aria-live="polite">
                                                ${kcSanitize(messagesPerField.getFirstError('username','password'))?no_esc}
                                        </span>
                                    </el-if>
                                </el-if>
                            </div>

                            <div class="${properties.kcFormGroupClass!}">
                                <label for="password" class="${properties.kcLabelClass!}">${msg("password")}</label>

                                <input tabindex="2" id="password" class="${properties.kcInputClass!}" name="password" type="password" autocomplete="off"
                                    aria-invalid="<#if messagesPerField.existsError('username','password')>true</#if>"
                                />
                            </div>

                            <div class="${properties.kcFormGroupClass!} ${properties.kcFormSettingClass!}">
                              <div id="kc-form-options">
                                <el-if realm.rememberMe && !usernameEditDisabled??>
                                    <div class="checkbox">
                                        <label>
                                            <el-if login.rememberMe??>
                                                <input tabindex="3" id="rememberMe" name="rememberMe" type="checkbox" checked> ${msg("rememberMe")}
                                            <el-else>
                                                <input tabindex="3" id="rememberMe" name="rememberMe" type="checkbox"> ${msg("rememberMe")}
                                            </el-if>
                                        </label>
                                    </div>
                                </el-if>
                              </div>
                              <div class="${properties.kcFormOptionsWrapperClass!}">
                                  <el-if realm.resetPasswordAllowed>
                                      <span><a tabindex="5" href="${url.loginResetCredentialsUrl}">${msg("doForgotPassword")}</a></span>
                                  </el-if>
                              </div>
                            </div>

                            <div id="kc-form-buttons" class="${properties.kcFormGroupClass!}">
                              <input type="hidden" id="id-hidden-input" name="credentialId" <#if auth.selectedCredential?has_content>value="${auth.selectedCredential}"</#if>/>
                              <input tabindex="4" class="${properties.kcButtonClass!} ${properties.kcButtonPrimaryClass!} ${properties.kcButtonBlockClass!} ${properties.kcButtonLargeClass!}" name="login" id="kc-login" type="submit" value="${msg("doLogIn")}"/>
                            </div>
                        </form>
                    </el-if>
                  </div>

                  <el-if realm.password && social.providers??>
                      <div id="kc-social-providers" class="${properties.kcFormSocialAccountSectionClass!}">
                          <hr/>
                          <h4>${msg("identity-provider-login-label")}</h4>

                          <ul class="${properties.kcFormSocialAccountListClass!} <#if social.providers?size gt 3>${properties.kcFormSocialAccountListGridClass!}</#if>">
                              <#list social.providers as p>
                                  <a id="social-${p.alias}" class="${properties.kcFormSocialAccountListButtonClass!} <#if social.providers?size gt 3>${properties.kcFormSocialAccountGridItem!}</#if>"
                                          type="button" href="${p.loginUrl}">
                                      <#if p.iconClasses?has_content>
                                          <i class="${properties.kcCommonLogoIdP!} ${p.iconClasses!}" aria-hidden="true"></i>
                                          <span class="${properties.kcFormSocialAccountNameClass!} kc-social-icon-text">${p.displayName!}</span>
                                      <#else>
                                          <span class="${properties.kcFormSocialAccountNameClass!}">${p.displayName!}</span>
                                      </#if>
                                  </a>
                              </#list>
                          </ul>
                      </div>
                  </el-if>
                <!---->
              </div>
             
            </div>
          </div>
      </div>
 
    <el-elseif section = "info" >
        <el-if realm.password && realm.registrationAllowed && !registrationDisabled??>
            <div id="kc-registration-container">
                <div id="kc-registration">
                    <span>${msg("noAccount")} <a tabindex="6" href="${url.registrationUrl}">${msg("doRegister")}</a></span>
                </div>
            </div>
        </el-if>
    </el-if>
  

  <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="position: absolute; width: 0; height: 0" id="__SVG_SPRITE_NODE__">
    <!--login-image-->
    <symbol xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 450 346" id="icon-login-image">
        <title>边缘计算插图</title>
        <defs>
            <linearGradient x1="67.555945%" y1="37.3969583%" x2="33.483399%" y2="54.669658%" id="icon-login-image_linearGradient-1">
                <stop stop-color="#1D5FDE" offset="0%"></stop>
                <stop stop-color="#1D5FDE" offset="75.7132938%"></stop>
                <stop stop-color="#1650C9" offset="100%"></stop>
            </linearGradient>
            <linearGradient x1="49.036593%" y1="47.0518237%" x2="47.764258%" y2="48.3144052%" id="icon-login-image_linearGradient-2">
                <stop stop-color="#1D5FDE" offset="0%"></stop>
                <stop stop-color="#2171F9" offset="100%"></stop>
            </linearGradient>
            <filter x="-56.4%" y="-42.5%" width="212.7%" height="184.9%" filterUnits="objectBoundingBox" id="icon-login-image_filter-3">
                <feOffset dx="10" dy="0" in="SourceAlpha" result="shadowOffsetOuter1"></feOffset>
                <feGaussianBlur stdDeviation="3" in="shadowOffsetOuter1" result="shadowBlurOuter1"></feGaussianBlur>
                <feColorMatrix values="0 0 0 0 0.0635590134   0 0 0 0 0.124462019   0 0 0 0 0.269106658  0 0 0 0.4 0" type="matrix" in="shadowBlurOuter1" result="shadowMatrixOuter1"></feColorMatrix>
                <feMerge>
                    <feMergeNode in="shadowMatrixOuter1"></feMergeNode>
                    <feMergeNode in="SourceGraphic"></feMergeNode>
                </feMerge>
            </filter>
            <linearGradient x1="47.5724302%" y1="18.5686327%" x2="47.5724302%" y2="78.840268%" id="icon-login-image_linearGradient-4">
                <stop stop-color="#EEEBEC" offset="0%"></stop>
                <stop stop-color="#E0DFE3" offset="100%"></stop>
            </linearGradient>
            <filter x="-41.8%" y="-31.5%" width="183.6%" height="163.0%" filterUnits="objectBoundingBox" id="icon-login-image_filter-5">
                <feOffset dx="6" dy="3" in="SourceAlpha" result="shadowOffsetOuter1"></feOffset>
                <feGaussianBlur stdDeviation="3" in="shadowOffsetOuter1" result="shadowBlurOuter1"></feGaussianBlur>
                <feColorMatrix values="0 0 0 0 0.0299951677   0 0 0 0 0.0832051341   0 0 0 0 0.209578804  0 0 0 0.4 0" type="matrix" in="shadowBlurOuter1" result="shadowMatrixOuter1"></feColorMatrix>
                <feMerge>
                    <feMergeNode in="shadowMatrixOuter1"></feMergeNode>
                    <feMergeNode in="SourceGraphic"></feMergeNode>
                </feMerge>
            </filter>
            <filter x="-41.8%" y="-31.5%" width="183.6%" height="163.0%" filterUnits="objectBoundingBox" id="icon-login-image_filter-6">
                <feOffset dx="6" dy="3" in="SourceAlpha" result="shadowOffsetOuter1"></feOffset>
                <feGaussianBlur stdDeviation="3" in="shadowOffsetOuter1" result="shadowBlurOuter1"></feGaussianBlur>
                <feColorMatrix values="0 0 0 0 0.0485135998   0 0 0 0 0.135437509   0 0 0 0 0.341881793  0 0 0 0.4 0" type="matrix" in="shadowBlurOuter1" result="shadowMatrixOuter1"></feColorMatrix>
                <feMerge>
                    <feMergeNode in="shadowMatrixOuter1"></feMergeNode>
                    <feMergeNode in="SourceGraphic"></feMergeNode>
                </feMerge>
            </filter>
            <linearGradient x1="0%" y1="31.9519544%" x2="100%" y2="34.0837996%" id="icon-login-image_linearGradient-7">
                <stop stop-color="#2582FA" offset="0%"></stop>
                <stop stop-color="#3575E5" offset="100%"></stop>
            </linearGradient>
            <filter x="-23.5%" y="-27.6%" width="147.1%" height="155.2%" filterUnits="objectBoundingBox" id="icon-login-image_filter-8">
                <feOffset dx="0" dy="4" in="SourceAlpha" result="shadowOffsetOuter1"></feOffset>
                <feGaussianBlur stdDeviation="2" in="shadowOffsetOuter1" result="shadowBlurOuter1"></feGaussianBlur>
                <feColorMatrix values="0 0 0 0 0.11571574   0 0 0 0 0.247116733   0 0 0 0 0.566859149  0 0 0 1 0" type="matrix" in="shadowBlurOuter1" result="shadowMatrixOuter1"></feColorMatrix>
                <feMerge>
                    <feMergeNode in="shadowMatrixOuter1"></feMergeNode>
                    <feMergeNode in="SourceGraphic"></feMergeNode>
                </feMerge>
            </filter>
            <linearGradient x1="0%" y1="31.2382756%" x2="100%" y2="33.454421%" id="icon-login-image_linearGradient-9">
                <stop stop-color="#2582FA" offset="0%"></stop>
                <stop stop-color="#3575E5" offset="100%"></stop>
            </linearGradient>
            <filter x="-23.5%" y="-27.6%" width="147.1%" height="155.2%" filterUnits="objectBoundingBox" id="icon-login-image_filter-10">
                <feOffset dx="0" dy="4" in="SourceAlpha" result="shadowOffsetOuter1"></feOffset>
                <feGaussianBlur stdDeviation="2" in="shadowOffsetOuter1" result="shadowBlurOuter1"></feGaussianBlur>
                <feColorMatrix values="0 0 0 0 0.113872959   0 0 0 0 0.258845259   0 0 0 0 0.611611187  0 0 0 1 0" type="matrix" in="shadowBlurOuter1" result="shadowMatrixOuter1"></feColorMatrix>
                <feMerge>
                    <feMergeNode in="shadowMatrixOuter1"></feMergeNode>
                    <feMergeNode in="SourceGraphic"></feMergeNode>
                </feMerge>
            </filter>
            <linearGradient x1="97.9380932%" y1="31.7095105%" x2="11.7974563%" y2="60.1566649%" id="icon-login-image_linearGradient-11">
                <stop stop-color="#2568EC" offset="0%"></stop>
                <stop stop-color="#3278E9" offset="18.208316%"></stop>
                <stop stop-color="#4496FF" offset="100%"></stop>
            </linearGradient>
            <linearGradient x1="0%" y1="46.3091635%" x2="100%" y2="46.3091635%" id="icon-login-image_linearGradient-12">
                <stop stop-color="#F1F2F8" offset="0%"></stop>
                <stop stop-color="#B2BBCC" offset="100%"></stop>
            </linearGradient>
            <linearGradient x1="76.2493505%" y1="58.8690156%" x2="15.9985689%" y2="43.5198965%" id="icon-login-image_linearGradient-13">
                <stop stop-color="#F1F2F8" offset="0%"></stop>
                <stop stop-color="#DDDDE7" offset="100%"></stop>
            </linearGradient>
            <linearGradient x1="0%" y1="46.3091635%" x2="100%" y2="46.3091635%" id="icon-login-image_linearGradient-14">
                <stop stop-color="#F1F2F8" offset="0%"></stop>
                <stop stop-color="#B2BBCC" offset="100%"></stop>
            </linearGradient>
            <linearGradient x1="0%" y1="46.3091635%" x2="100%" y2="46.3091635%" id="icon-login-image_linearGradient-15">
                <stop stop-color="#F1F2F8" offset="0%"></stop>
                <stop stop-color="#B2BBCC" offset="100%"></stop>
            </linearGradient>
        </defs>
        <g id="icon-login-image_页面-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
            <g id="icon-login-image_登录" transform="translate(-182.000000, -226.000000)">
                <g id="icon-login-image_边缘计算插图" transform="translate(182.000000, 226.000000)">
                    <g id="icon-login-image_编组-15" transform="translate(91.000000, 31.092268)" stroke="#353848" stroke-width="2">
                        <path d="M0.118679411,108.09524 L17.3644576,97.6374134 C20.4258366,95.7809955 24.2460941,95.7028703 27.3808102,97.4325764 L82.1186794,127.636405 L82.1186794,127.636405" id="icon-login-image_路径-8"></path>
                        <line x1="194.772728" y1="0.117248558" x2="238.424436" y2="24.777053" id="icon-login-image_路径-9"></line>
                        <path d="M325.719151,68.6168781 L325.719151,78.5973782 C325.719151,83.7673999 323.056726,88.5730175 318.673496,91.3146264 L298.031419,104.225768 L298.031419,104.225768" id="icon-login-image_路径-10"></path>
                        <path d="M223.658901,70.198752 L223.658901,95.6846165 C222.480162,104.342973 215.511275,110.515889 202.75224,114.203362 C202.887053,114.394705 190.35888,117.456191 180.658901,108.936298" id="icon-login-image_路径-11"></path>
                        <path d="M187.161999,126.443519 C198.770957,139.478741 212.800326,139.187425 229.250106,125.56957 C229.266996,125.453225 244.111157,114.546346 267.161999,138.649347" id="icon-login-image_路径-12"></path>
                        <path d="M292.059022,191.429393 C295.370209,199.496694 292.704661,212.859043 284.062378,231.51644 C277.135571,245.635168 249.116254,275.348406 242.536111,267.409922" id="icon-login-image_路径-13"></path>
                    </g>
                    <g id="icon-login-image_编组-4" transform="translate(322.560587, 118.300000)">
                        <polygon id="icon-login-image_矩形" fill="#3189FA" transform="translate(58.119312, 26.600000) rotate(-45.000000) translate(-58.119312, -26.600000) " points="39.9193124 8.4 68.8946912 15.8246212 76.3193124 44.8 47.3439336 37.3753788"></polygon>
                        <polygon id="icon-login-image_矩形备份" fill="#3278E9" transform="translate(56.165896, 77.215368) rotate(-45.000000) translate(-56.165896, -77.215368) " points="29.7702965 70.0577693 75.1939076 24.6341582 82.561496 53.5525042 58.3432365 77.6423919 68.1383594 107.554526 45.896307 129.796578"></polygon>
                        <polygon id="icon-login-image_矩形备份-2" fill="url(#icon-login-image_linearGradient-1)" transform="translate(70.864808, 51.247058) scale(-1, 1) rotate(-45.000000) translate(-70.864808, -51.247058) " points="55.1111657 48.9147661 79.136797 24.6610035 86.618451 53.6934151 62.4787541 77.8331121"></polygon>
                        <polygon id="icon-login-image_矩形备份-3" fill="url(#icon-login-image_linearGradient-2)" transform="translate(85.162854, 75.815403) scale(-1, 1) rotate(-45.000000) translate(-85.162854, -75.815403) " points="66.0027328 56.4473769 96.8983542 66.2080512 104.322975 95.18343 73.427354 85.4227557"></polygon>
                        <polygon id="icon-login-image_矩形备份-4" fill="#196AEC" transform="translate(98.705999, 98.873978) scale(-1, 1) rotate(-45.000000) translate(-98.705999, -98.873978) " points="84.3359152 95.0440617 105.747204 73.6327732 113.076083 102.51241 91.8562783 124.115182"></polygon>
                    </g>
                    <g id="icon-login-image_编组-4备份-2" transform="translate(122.800000, 54.600000)">
                        <polygon id="icon-login-image_矩形" fill="#3189FA" transform="translate(102.361715, 55.776000) rotate(-45.000000) translate(-102.361715, -55.776000) " points="63.0497147 16.464 125.636533 32.5011818 141.673715 95.088 79.0868965 79.0508182"></polygon>
                        <polygon id="icon-login-image_矩形备份" fill="#3278E9" transform="translate(74.692618, 118.986368) rotate(-45.000000) translate(-74.692618, -118.986368) " points="33.7076035 120.905765 99.640451 54.4801536 115.677633 117.066972 49.7447853 183.492583"></polygon>
                        <polygon id="icon-login-image_矩形备份-2" fill="#196AEC" transform="translate(129.891986, 119.026754) scale(-1, 1) rotate(-45.000000) translate(-129.891986, -119.026754) " points="88.9069714 120.94615 154.839819 54.5205394 170.877001 117.107358 104.944153 183.532969"></polygon>
                    </g>
                    <g id="icon-login-image_编组-4备份-4" transform="translate(82.600000, 16.800000)">
                        <polygon id="icon-login-image_矩形" fill="#3189FA" transform="translate(59.413623, 26.772480) rotate(-45.000000) translate(-59.413623, -26.772480) " points="40.5438631 7.90272 70.5855358 15.6005673 78.2833831 45.64224 48.2417103 37.9443927"></polygon>
                        <polygon id="icon-login-image_矩形备份" fill="#3278E9" transform="translate(46.132457, 66.913457) rotate(-45.000000) translate(-46.132457, -66.913457) " points="19.5300032 74.7644135 65.0370629 29.0208273 72.7349102 59.0625 27.2278505 104.806086"></polygon>
                        <polygon id="icon-login-image_矩形备份-2" fill="#196AEC" transform="translate(72.628153, 66.932842) scale(-1, 1) rotate(-45.000000) translate(-72.628153, -66.932842) " points="46.0256998 74.7837986 91.5327595 29.0402124 99.2306068 59.0818852 53.7235471 104.825471"></polygon>
                    </g>
                    <g id="icon-login-image_编组-4备份-5" transform="translate(394.800000, 64.400000)">
                        <polygon id="icon-login-image_矩形" fill="#4496FF" transform="translate(22.006812, 13.386240) rotate(-45.000000) translate(-22.006812, -13.386240) " points="12.5719315 3.95136 27.5927679 7.80028363 31.4416915 22.82112 16.4208552 18.9721964"></polygon>
                        <polygon id="icon-login-image_矩形备份" fill="#3278E9" transform="translate(15.366228, 25.056728) rotate(-45.000000) translate(-15.366228, -25.056728) " points="8.00469858 23.0425098 18.8788345 12.0501106 22.7277581 27.070947 11.8536222 38.0633461"></polygon>
                        <polygon id="icon-login-image_矩形备份-2" fill="#196AEC" transform="translate(28.614077, 25.066421) scale(-1, 1) rotate(-45.000000) translate(-28.614077, -25.066421) " points="21.2525469 23.0522024 32.1266828 12.0598032 35.9756064 27.0806395 25.1014705 38.0730387"></polygon>
                    </g>
                    <g id="icon-login-image_编组-10" transform="translate(192.500000, 179.446091)">
                        <g id="icon-login-image_编组-4备份-3" transform="translate(0.000000, 0.453909)">
                            <polygon id="icon-login-image_矩形" fill="#3189FA" transform="translate(87.961715, 55.776000) rotate(-45.000000) translate(-87.961715, -55.776000) " points="48.6497147 16.464 111.236533 32.5011818 127.273715 95.088 64.6868965 79.0508182"></polygon>
                            <polygon id="icon-login-image_矩形备份" fill="#3278E9" transform="translate(60.292618, 104.286368) rotate(-45.000000) translate(-60.292618, -104.286368) " points="29.7020732 95.8112949 74.8459813 50.1746233 90.8831631 112.761441 45.739255 158.398113"></polygon>
                            <polygon id="icon-login-image_矩形备份-2" fill="#196AEC" transform="translate(115.491986, 104.326754) scale(-1, 1) rotate(-45.000000) translate(-115.491986, -104.326754) " points="84.9014411 95.8516807 130.045349 50.215009 146.082531 112.801827 100.938623 158.438499"></polygon>
                        </g>
                        <g id="icon-login-image_编组-9" transform="translate(41.106941, 0.000000)">
                            <g id="icon-login-image_编组-8" filter="url(#icon-login-image_filter-3)" transform="translate(16.800000, 0.000000)">
                                <polygon id="icon-login-image_路径-2" fill="url(#icon-login-image_linearGradient-4)" points="-3.97903932e-14 -3.97903932e-14 -3.97903932e-14 41.9998305 54.0182588 72.8467141 54.0182588 31.2780924"></polygon>
                                <path d="M32.459427,33.5903176 L32.5297227,33.6952836 L37.9370156,43.5766457 C38.0902007,43.8565783 38.0328702,44.1983822 37.8119861,44.4136576 L37.7074449,44.4976226 L32.300152,48.0519791 C31.9770961,48.2643324 31.5430612,48.1745901 31.330708,47.8515341 C31.1419495,47.5643733 31.1918839,47.1895254 31.4322033,46.9606286 L31.531153,46.88209 L36.3984595,43.6817094 L31.3015823,34.3673483 C31.1366173,34.0658891 31.2166439,33.6962945 31.4746542,33.4875414 L31.5796201,33.4172457 C31.8810793,33.2522808 32.2506739,33.3323073 32.459427,33.5903176 Z M18.5438017,24.1310922 C18.7842622,24.3765913 18.8073493,24.7540452 18.6155364,25.0248864 L18.533538,25.1209885 L12.8574595,30.6785094 L18.6040713,38.3531763 C18.8100286,38.6282629 18.783099,39.0054621 18.5572196,39.2486197 L18.4632553,39.3330594 C18.1881686,39.5390167 17.8109695,39.5120871 17.5678119,39.2862077 L17.4833722,39.1922434 L11.3706124,31.0277426 C11.1865985,30.7819646 11.1866859,30.4502049 11.3575174,30.2066176 L11.4411456,30.108129 L17.5539055,24.1208285 C17.830092,23.8503104 18.2732837,23.8549056 18.5438017,24.1310922 Z M27.9668076,33.5318886 C28.2119863,33.7726758 28.2423929,34.1496106 28.0558714,34.4241227 L27.9757532,34.5217977 L23.3192855,39.2631916 C23.0483999,39.5390177 22.6052025,39.5430227 22.3293764,39.2721372 C22.0841977,39.03135 22.0537911,38.6544152 22.2403126,38.3799031 L22.3204309,38.2822281 L26.9768985,33.5408342 C27.2477841,33.2650081 27.6909815,33.261003 27.9668076,33.5318886 Z" id="icon-login-image_形状结合" fill="#979797" fill-rule="nonzero"></path>
                            </g>
                            <g id="icon-login-image_编组-8备份" filter="url(#icon-login-image_filter-5)" transform="translate(8.400000, 7.000000)">
                                <polygon id="icon-login-image_路径-2" fill="url(#icon-login-image_linearGradient-4)" points="-3.97903932e-14 -3.97903932e-14 -3.97903932e-14 41.9998305 54.0182588 72.8467141 54.0182588 31.2780924"></polygon>
                                <path d="M32.459427,33.5903176 L32.5297227,33.6952836 L37.9370156,43.5766457 C38.0902007,43.8565783 38.0328702,44.1983822 37.8119861,44.4136576 L37.7074449,44.4976226 L32.300152,48.0519791 C31.9770961,48.2643324 31.5430612,48.1745901 31.330708,47.8515341 C31.1419495,47.5643733 31.1918839,47.1895254 31.4322033,46.9606286 L31.531153,46.88209 L36.3984595,43.6817094 L31.3015823,34.3673483 C31.1366173,34.0658891 31.2166439,33.6962945 31.4746542,33.4875414 L31.5796201,33.4172457 C31.8810793,33.2522808 32.2506739,33.3323073 32.459427,33.5903176 Z M18.5438017,24.1310922 C18.7842622,24.3765913 18.8073493,24.7540452 18.6155364,25.0248864 L18.533538,25.1209885 L12.8574595,30.6785094 L18.6040713,38.3531763 C18.8100286,38.6282629 18.783099,39.0054621 18.5572196,39.2486197 L18.4632553,39.3330594 C18.1881686,39.5390167 17.8109695,39.5120871 17.5678119,39.2862077 L17.4833722,39.1922434 L11.3706124,31.0277426 C11.1865985,30.7819646 11.1866859,30.4502049 11.3575174,30.2066176 L11.4411456,30.108129 L17.5539055,24.1208285 C17.830092,23.8503104 18.2732837,23.8549056 18.5438017,24.1310922 Z M27.9668076,33.5318886 C28.2119863,33.7726758 28.2423929,34.1496106 28.0558714,34.4241227 L27.9757532,34.5217977 L23.3192855,39.2631916 C23.0483999,39.5390177 22.6052025,39.5430227 22.3293764,39.2721372 C22.0841977,39.03135 22.0537911,38.6544152 22.2403126,38.3799031 L22.3204309,38.2822281 L26.9768985,33.5408342 C27.2477841,33.2650081 27.6909815,33.261003 27.9668076,33.5318886 Z" id="icon-login-image_形状结合" fill="#979797" fill-rule="nonzero"></path>
                            </g>
                            <g id="icon-login-image_编组-8备份-2" filter="url(#icon-login-image_filter-6)" transform="translate(0.000000, 12.600000)">
                                <polygon id="icon-login-image_路径-2" fill="url(#icon-login-image_linearGradient-4)" points="-3.97903932e-14 -3.97903932e-14 -3.97903932e-14 41.9998305 54.0182588 72.8467141 54.0182588 31.2780924"></polygon>
                                <path d="M32.459427,33.5903176 L32.5297227,33.6952836 L37.9370156,43.5766457 C38.0902007,43.8565783 38.0328702,44.1983822 37.8119861,44.4136576 L37.7074449,44.4976226 L32.300152,48.0519791 C31.9770961,48.2643324 31.5430612,48.1745901 31.330708,47.8515341 C31.1419495,47.5643733 31.1918839,47.1895254 31.4322033,46.9606286 L31.531153,46.88209 L36.3984595,43.6817094 L31.3015823,34.3673483 C31.1366173,34.0658891 31.2166439,33.6962945 31.4746542,33.4875414 L31.5796201,33.4172457 C31.8810793,33.2522808 32.2506739,33.3323073 32.459427,33.5903176 Z M18.5438017,24.1310922 C18.7842622,24.3765913 18.8073493,24.7540452 18.6155364,25.0248864 L18.533538,25.1209885 L12.8574595,30.6785094 L18.6040713,38.3531763 C18.8100286,38.6282629 18.783099,39.0054621 18.5572196,39.2486197 L18.4632553,39.3330594 C18.1881686,39.5390167 17.8109695,39.5120871 17.5678119,39.2862077 L17.4833722,39.1922434 L11.3706124,31.0277426 C11.1865985,30.7819646 11.1866859,30.4502049 11.3575174,30.2066176 L11.4411456,30.108129 L17.5539055,24.1208285 C17.830092,23.8503104 18.2732837,23.8549056 18.5438017,24.1310922 Z M27.9668076,33.5318886 C28.2119863,33.7726758 28.2423929,34.1496106 28.0558714,34.4241227 L27.9757532,34.5217977 L23.3192855,39.2631916 C23.0483999,39.5390177 22.6052025,39.5430227 22.3293764,39.2721372 C22.0841977,39.03135 22.0537911,38.6544152 22.2403126,38.3799031 L22.3204309,38.2822281 L26.9768985,33.5408342 C27.2477841,33.2650081 27.6909815,33.261003 27.9668076,33.5318886 Z" id="icon-login-image_形状结合" fill="#A9B8D5" fill-rule="nonzero"></path>
                            </g>
                        </g>
                    </g>
                    <g id="icon-login-image_编组-4备份" transform="translate(180.200000, 12.600000)">
                        <polygon id="icon-login-image_矩形" fill="#F1F2F8" transform="translate(44.519925, 27.444444) rotate(-45.000000) translate(-44.519925, -27.444444) " points="25.7421477 8.66666667 55.6373798 16.3269901 63.2977032 46.2222222 33.4024712 38.5618988"></polygon>
                        <polygon id="icon-login-image_矩形备份" fill="#DDDDE7" transform="translate(31.303499, 53.257378) rotate(-45.000000) translate(-31.303499, -53.257378) " points="14.8238185 51.0769673 40.1228565 25.5425557 47.78318 55.4377878 22.484142 80.9721993"></polygon>
                        <polygon id="icon-login-image_矩形备份-2" fill="#AAB3C4" transform="translate(57.670040, 53.276668) scale(-1, 1) rotate(-45.000000) translate(-57.670040, -53.276668) " points="41.1903596 51.0962579 66.4893977 25.5618464 74.1497211 55.4570785 48.8506831 80.99149"></polygon>
                    </g>
                    <g id="icon-login-image_编组-7" transform="translate(25.200000, 82.600000)">
                        <g id="icon-login-image_编组-5备份" transform="translate(0.000000, 40.600000)">
                            <ellipse id="icon-login-image_椭圆形" fill="#2781F8" cx="33.6" cy="21" rx="33.6" ry="21"></ellipse>
                            <path d="M0,21 C0,32.5979797 15.0432324,42 33.6,42 C52.1567676,42 67.2,32.5979797 67.2,21 L67.2,43.5671894 C67.1999996,44.3959665 66.8328444,45.1821624 66.1973569,45.7141654 C57.408332,53.0719633 46.5425463,56.7508622 33.6,56.7508622 C20.6574628,56.7508622 9.79168328,53.0719684 1.00266155,45.7141809 C0.367158042,45.182188 1.01496639e-16,44.3959866 0,43.5672037 L0,21 L0,21 Z" id="icon-login-image_路径" fill="url(#icon-login-image_linearGradient-7)"></path>
                        </g>
                        <g id="icon-login-image_编组-5" filter="url(#icon-login-image_filter-8)" transform="translate(0.000000, 19.600000)">
                            <ellipse id="icon-login-image_椭圆形" fill="#2781F8" cx="33.6" cy="21" rx="33.6" ry="21"></ellipse>
                            <path d="M0,21 C0,32.5979797 15.0432324,42 33.6,42 C52.1567676,42 67.2,32.5979797 67.2,21 L67.2,43.6163935 C67.199992,44.4158125 66.8582898,45.1771104 66.2609951,45.7084386 C57.4607999,53.536721 46.5738016,57.4508622 33.6,57.4508622 C20.6261902,57.4508622 9.73918625,53.536716 0.938988174,45.7084237 C0.341701521,45.1770882 9.79004436e-17,44.4157913 0,43.6163735 L0,21 L0,21 Z" id="icon-login-image_路径" fill="url(#icon-login-image_linearGradient-9)"></path>
                        </g>
                        <g id="icon-login-image_编组-5备份-2" filter="url(#icon-login-image_filter-10)">
                            <ellipse id="icon-login-image_椭圆形" fill="#4496FF" cx="33.6" cy="21" rx="33.6" ry="21"></ellipse>
                            <path d="M0,21 C0,32.5979797 15.0432324,42 33.6,42 C52.1567676,42 67.2,32.5979797 67.2,21 L67.2,43.6163935 C67.199992,44.4158125 66.8582898,45.1771104 66.2609951,45.7084386 C57.4607999,53.536721 46.5738016,57.4508622 33.6,57.4508622 C20.6261902,57.4508622 9.73918625,53.536716 0.938988174,45.7084237 C0.341701521,45.1770882 9.79004436e-17,44.4157913 0,43.6163735 L0,21 L0,21 Z" id="icon-login-image_路径" fill="url(#icon-login-image_linearGradient-9)"></path>
                        </g>
                    </g>
                    <g id="icon-login-image_编组-16" transform="translate(0.000000, 204.766999)">
                        <g id="icon-login-image_编组-14" transform="translate(23.800000, 0.000000)">
                            <polygon id="icon-login-image_路径-7" fill="#196AEC" points="0 53.1056483 0 57.3135384 52.1482388 89.5700032 140.671101 39.342107 140.671101 34.5254996"></polygon>
                            <polygon id="icon-login-image_路径-6" fill="url(#icon-login-image_linearGradient-11)" points="-5.96855898e-14 53.1056483 52.2519906 85.1104439 141.122372 34.8159535 144.366151 3.97903932e-14 88.6534309 3.97903932e-14"></polygon>
                        </g>
                        <g id="icon-login-image_编组-14备份" transform="translate(0.000000, 57.000000)">
                            <polygon id="icon-login-image_路径-7" fill="#196AEC" points="0 10.1056483 0 14.3135384 52.1482388 46.5700032 66.5522439 37.6046195 66.5522439 32.7880122"></polygon>
                            <polygon id="icon-login-image_路径-6" fill="#4496FF" points="0 10.1056483 52.2519906 42.1104439 67.0035155 33.0784661 15.0571902 0.243344168"></polygon>
                        </g>
                    </g>
                    <g id="icon-login-image_编组-4备份-7" transform="translate(257.600000, 0.000000)">
                        <polygon id="icon-login-image_矩形" fill="#4496FF" transform="translate(22.006812, 13.386240) rotate(-45.000000) translate(-22.006812, -13.386240) " points="12.5719315 3.95136 27.5927679 7.80028363 31.4416915 22.82112 16.4208552 18.9721964"></polygon>
                        <polygon id="icon-login-image_矩形备份" fill="#3278E9" transform="translate(15.366228, 25.056728) rotate(-45.000000) translate(-15.366228, -25.056728) " points="8.00469858 23.0425098 18.8788345 12.0501106 22.7277581 27.070947 11.8536222 38.0633461"></polygon>
                        <polygon id="icon-login-image_矩形备份-2" fill="#196AEC" transform="translate(28.614077, 25.066421) scale(-1, 1) rotate(-45.000000) translate(-28.614077, -25.066421) " points="21.2525469 23.0522024 32.1266828 12.0598032 35.9756064 27.0806395 25.1014705 38.0730387"></polygon>
                    </g>
                    <g id="icon-login-image_编组-13" transform="translate(287.000000, 11.200000)">
                        <g id="icon-login-image_编组-4备份-6" transform="translate(0.000000, 2.800000)">
                            <polygon id="icon-login-image_矩形" fill="#3189FA" transform="translate(56.812194, 42.132714) rotate(-45.000000) translate(-56.812194, -42.132714) " points="21.9025019 18.7800332 84.1010177 35.744139 91.7218865 65.485395 29.5233707 48.5212892"></polygon>
                            <polygon id="icon-login-image_矩形备份" fill="#3278E9" transform="translate(28.885132, 73.412322) rotate(-45.000000) translate(-28.885132, -73.412322) " points="14.3093032 69.4241694 35.8400923 47.659219 43.4609611 77.400475 21.930172 99.1654254"></polygon>
                            <polygon id="icon-login-image_矩形备份-2" fill="#196AEC" transform="translate(69.894579, 65.259472) scale(-1, 1) rotate(-45.000000) translate(-69.894579, -65.259472) " points="50.6471317 45.0426897 72.1779208 23.2777393 89.1420266 85.4762551 67.6112375 107.241205"></polygon>
                        </g>
                        <g id="icon-login-image_编组-12" transform="translate(35.700000, 0.000000)">
                            <g id="icon-login-image_编组-11" transform="translate(27.300000, 0.000000)">
                                <path d="M0,2.8 L11.2,2.8 L11.2,35 C9.35554036,35.9333333 7.49629309,36.4 5.6222582,36.4 C3.7482233,36.4 1.87413723,35.9333333 0,35 L0,2.8 Z" id="icon-login-image_矩形" fill="url(#icon-login-image_linearGradient-12)"></path>
                                <ellipse id="icon-login-image_椭圆形" fill="url(#icon-login-image_linearGradient-13)" cx="5.6" cy="2.8" rx="5.6" ry="2.8"></ellipse>
                            </g>
                            <g id="icon-login-image_编组-11备份" transform="translate(13.300000, 18.200000)">
                                <path d="M0,2.8 L11.2,2.8 L11.2,25.2 C9.35554036,26.1333333 7.49629309,26.6 5.6222582,26.6 C3.7482233,26.6 1.87413723,26.1333333 0,25.2 L0,2.8 Z" id="icon-login-image_矩形" fill="url(#icon-login-image_linearGradient-14)"></path>
                                <ellipse id="icon-login-image_椭圆形" fill="url(#icon-login-image_linearGradient-13)" cx="5.6" cy="2.8" rx="5.6" ry="2.8"></ellipse>
                            </g>
                            <g id="icon-login-image_编组-11备份-2" transform="translate(0.000000, 30.800000)">
                                <path d="M0,2.8 L11.2,2.8 L11.2,21 C9.35554036,21.9333333 7.49629309,22.4 5.6222582,22.4 C3.7482233,22.4 1.87413723,21.9333333 0,21 L0,2.8 Z" id="icon-login-image_矩形" fill="url(#icon-login-image_linearGradient-15)"></path>
                                <ellipse id="icon-login-image_椭圆形" fill="url(#icon-login-image_linearGradient-13)" cx="5.6" cy="2.8" rx="5.6" ry="2.8"></ellipse>
                            </g>
                        </g>
                    </g>
                </g>
            </g>
        </g>
    </symbol>
    <!--DaoCloud-->
    <symbol xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 108 27" id="icon-daocloud copy">
        <title>DaoCloud</title>
        <g id="icon-daocloud copy_页面-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
            <g id="icon-daocloud copy_登录" transform="translate(-846.000000, -149.000000)" fill="#4496FF" fill-rule="nonzero">
                <g id="icon-daocloud copy_DaoCloud" transform="translate(846.000000, 149.000000)">
                    <path d="M16.012279,16.9511106 L15.5563485,23.3346512 L12.0160161,26.0168068 L8.4219995,23.3346512 L8.01949635,16.9511106 L12.0427298,19.6332662 L16.012279,16.9511106 Z M23.2005691,12.1233845 L22.4495039,18.1581063 L17.4607253,21.9131755 L17.8899421,15.6904306 L23.2005691,12.1233845 Z M0.804749433,12.1233845 L6.11537648,15.6904306 L6.51762277,21.9131755 L1.50187358,18.1848199 L0.804749433,12.1233845 Z M67.6878267,6.29802065 C69.4116293,6.29802065 70.4383077,6.78220599 71.6003526,7.59568874 L70.5937094,9.41632838 C69.6058172,8.87409217 68.966487,8.56431629 67.6883405,8.56431629 C66.4101939,8.56431629 65.5771896,9.47463611 65.5771896,10.9467137 L65.5771896,15.7305162 C65.5771896,17.2609015 66.4292017,18.1129136 67.6883405,18.1129136 C68.9667439,18.1129136 69.6058172,17.8031377 70.5937094,17.2609015 L71.6008663,19.1008058 C70.439592,19.9148023 69.412143,20.3987308 67.6878267,20.3987308 C64.9568673,20.3987308 62.9615613,18.6749282 62.9615613,15.9632334 L62.9615613,10.7139965 C62.9615613,8.00255855 64.9563536,6.29802065 67.6878267,6.29802065 Z M46.151725,9.69605137 C48.8153866,9.69605137 50.3724855,10.8077512 50.3724855,13.3504306 L50.3724855,20.1254294 L50.3712012,20.1267137 L48.2063662,20.1267137 L48.06689,19.1442156 C47.4655754,19.825928 46.3659481,20.3257819 45.1604936,20.3257819 C43.1972954,20.3257819 41.7329237,18.927167 41.7329237,17.2547368 C41.7329237,13.0748678 47.2891508,12.8791785 47.7249333,12.8702584 L47.7519768,12.8698413 C47.7519768,12.5343792 47.2749836,11.5051322 45.10758,11.5051322 C44.4700205,11.5263842 43.8391815,11.6424752 43.2358247,11.8495845 L42.7477865,10.4987459 C43.8125517,9.99247865 44.9729493,9.71884126 46.151725,9.69605137 Z M56.7380458,9.69939058 C59.37448,9.69939058 61.0073533,11.2734425 61.0073533,13.8507983 L61.0073533,16.1723193 C61.0271317,18.7496751 59.37448,20.323727 56.7380458,20.323727 C54.0820902,20.323727 52.4484462,18.7496751 52.4484462,16.1723193 L52.4484462,13.8507983 C52.4484462,11.2734425 54.0815764,9.69939058 56.7380458,9.69939058 Z M82.1365852,9.86172752 C84.730894,9.86172752 86.3396223,11.4111206 86.3396223,13.9486628 L86.3396223,16.2347368 C86.3588869,18.7720222 84.7319214,20.3216721 82.1365852,20.3216721 C79.5219844,20.3216721 77.9142836,18.772279 77.9142836,16.2347368 L77.9142836,13.9486628 C77.9142836,11.4113775 79.5219844,9.86172752 82.1365852,9.86172752 Z M90.9510703,10.0556585 L90.9510703,16.137386 C90.9510703,17.5709343 91.2415815,18.1907429 92.2096953,18.1907429 C92.9969987,18.1790642 93.7161525,17.7416732 94.0886427,17.0479627 L94.0886427,10.0556585 L96.5881692,10.0556585 L96.5881692,20.1274843 L94.4189675,20.1274843 L94.2252934,19.1770939 C93.4926336,19.86741 92.5373408,20.273086 91.5318358,20.3209015 C89.2270108,20.3209015 88.4718358,18.9263964 88.4718358,16.3698464 L88.4718358,10.0556585 L90.9510703,10.0556585 Z M107.105137,5.60038278 L107.105137,20.1272274 L105.071559,20.1272274 L104.9552,19.2749584 C104.209958,19.9565021 103.234093,20.3302533 102.224241,20.3209015 C99.958202,20.3209015 98.7766356,18.7715084 98.7766356,16.2339663 L98.7766356,13.7742533 C98.7766356,11.2174465 99.9191589,9.86172752 102.146668,9.86172752 C102.989994,9.84482947 103.827648,10.0031415 104.606638,10.3266482 L104.606638,5.60038278 L107.105137,5.60038278 Z M75.7458524,5.60063964 L75.7458524,20.1274843 L73.266618,20.1274843 L73.266618,5.60063964 L75.7458524,5.60063964 Z M35.6229413,6.35478721 C38.4363536,6.35478721 40.1873835,8.08629564 40.1873835,10.8406296 L40.1873835,15.641385 C40.1873835,18.3761974 38.4363536,20.1272274 35.6229413,20.1272274 L30.5666079,20.1272274 L30.5666079,6.35478721 L35.6229413,6.35478721 Z M47.8159355,14.3899522 C47.4049559,14.3899522 44.3079678,14.6552909 44.3079678,17.0099471 C44.2943714,17.3765714 44.4368161,17.7317779 44.6999556,17.9874257 C44.9630952,18.2430736 45.3222667,18.3752021 45.6883455,18.3510249 C46.5411102,18.3234291 47.3287091,17.8878702 47.8054042,17.1802468 L47.8159355,14.3899522 Z M102.708426,12.0697154 C101.759577,12.0697154 101.236605,12.6507378 101.236605,13.9679275 L101.236605,16.0212843 C101.236605,17.4340267 101.624211,18.1712214 102.747469,18.1712214 C103.512993,18.2135176 104.235304,17.8143957 104.606895,17.1437723 L104.606895,12.4570637 C104.010635,12.1882191 103.362112,12.0558817 102.708426,12.0697154 Z M82.1365852,12.010894 C81.0133266,12.010894 80.4127827,12.7470612 80.4127827,14.1610879 L80.393518,16.0212843 C80.393518,17.4340267 81.0133266,18.1712214 82.1365852,18.1712214 C83.2410929,18.1712214 83.8603878,17.4350541 83.8603878,16.0212843 L83.8603878,14.1610879 C83.8603878,12.7483455 83.2405792,12.010894 82.1365852,12.010894 Z M56.7365047,11.884004 C55.5955225,11.884004 54.9854747,12.63173 54.9854747,14.0673332 L54.9656963,15.9570687 C54.9656963,17.3934425 55.5952657,18.1403979 56.7365047,18.1403979 C57.8579652,18.1403979 58.4875346,17.3926719 58.4875346,15.9570687 L58.4875346,14.0673332 C58.4875346,12.6312163 57.8579652,11.884004 56.7365047,11.884004 Z M35.6229413,8.69634349 L33.2030421,8.69634349 L33.2030421,17.785928 L35.6229413,17.785928 C36.8625585,17.785928 37.5314279,16.9793805 37.5314279,15.4053286 L37.5314279,11.0769428 C37.5314279,9.50289096 36.863586,8.69634349 35.6229413,8.69634349 Z M3.91586502,3.48690506 L9.97755729,6.49090909 L5.68615966,8.63647948 L5.98103752,13.4107781 L0.509614707,9.78979098 L7.46069873e-14,5.20351549 L3.91586502,3.48690506 Z M20.062483,3.48690506 L24.0320322,5.20351549 L23.4687333,9.76307731 L18.0507378,13.4107781 L18.3995568,8.63647948 L14.0544749,6.49090909 L20.062483,3.48690506 Z M11.9890456,-2.13162821e-14 L17.8899421,2.57478721 L12.0160161,5.47167968 L6.08840594,2.54807353 L11.9890456,-2.13162821e-14 Z" id="icon-daocloud copy_形状结合"></path>
                </g>
            </g>
        </g>
    </symbol>
    <!--Powered by DaoClou-->
    <symbol xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 360 20" id="icon-login-pb">
        <title>Powered by DaoCloud</title>
        <defs>
            <linearGradient x1="-5.18410262%" y1="50%" x2="100%" y2="50%" id="icon-login-pb_linearGradient-1">
                <stop stop-color="#2A79FF" stop-opacity="0" offset="0%"></stop>
                <stop stop-color="#4496FF" offset="100%"></stop>
            </linearGradient>
        </defs>
        <g id="icon-login-pb_登陆" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
            <g id="icon-login-pb_登录" transform="translate(-720.000000, -630.000000)">
                <g id="icon-login-pb_Powered-by-DaoCloud" transform="translate(720.000000, 630.000000)">
                    <polygon id="icon-login-pb_直线" fill="url(#icon-login-pb_linearGradient-1)" fill-rule="nonzero" points="96 10 96 11 0 11 0 10"></polygon>
                    <text font-family="PingFangSC-Regular, PingFang SC" font-size="14" font-weight="normal" fill="#4496FF">
                        <tspan x="107.634" y="15">Powered by DaoCloud</tspan>
                    </text>
                    <polygon id="icon-login-pb_直线备份" fill="url(#icon-login-pb_linearGradient-1)" fill-rule="nonzero" transform="translate(312.000000, 10.500000) scale(-1, 1) translate(-312.000000, -10.500000) " points="360 10 360 11 264 11 264 10"></polygon>
                </g>
            </g>
        </g>
    </symbol>
  </svg>

  </div>

</template>
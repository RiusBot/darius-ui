import React from "react";
import { Dialog, Box, Typography, Button, IconButton, Divider, Checkbox } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

function TermsAndConditionsDialog(props) {
    const { open, onClose, accept } = props;

    const [agreed, setAgreed] = React.useState(false);
    const [event, setEvent] = React.useState(null);

    return (
        <Dialog
            open={open}
            onClose={onClose}
            fullWidth
            maxWidth="md">
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    width: '100%',
                    padding: '32px 16px 8px'
                }}>
                <Typography variant="h5" component="div">
                    Terms and Conditions
                </Typography>
                <IconButton
                    style={{marginLeft: 'auto'}}
                    onClick={onClose}
                >
                    <CloseIcon fontSize="small" />
                </IconButton>
            </Box>
            <Divider variant="middle" />
            <Box
                sx={{
                    padding: '16px',
                    overflowY: 'scroll',}}>
                

                <Typography
                    color="textPrimary"
                    variant="h6"
                >
                    RiusBot歡迎您使用本系統內各項金融服務，為維護您個人權益，使用本系統前請先閱讀以下聲明，使用者將視為同意本系統各項聲明：
                </Typography><br/>


                <Typography
                    color="textPrimary"
                    variant="h6"
                >
                    1. RiusBot及其資料提供者、合作廠商及相關業者網路系統因軟、硬體設備之故障、失效或人為上之疏失導致資訊傳輸無法正常使用、遲延更新或中斷等異常狀況，造成任何資料內容（包括圖片、文字、數字、聲音、影像、軟體）遺失中斷、暫時、缺漏、遲延更新或儲存上之錯誤，兆豐證券均不負任何法律責任。
                </Typography>
                <Typography
                    color="textPrimary"
                    variant="h6"
                >
                    2. RiusBot及相關系統上所提供之投資建議及參考資料內容，不得作為任何交易之依據，使用者依建議或資料內容進行任何投資行為所產生之風險及盈虧，未經自行了解判斷，而導致交易損失風險，應自行負擔，兆豐證券不對使用者之投資決策負任何責任。
                </Typography><br/>

                <Typography
                    color="textPrimary"
                    variant="h6"
                >
                    2. RiusBot及相關系統上所提供之投資建議及參考資料內容，不得作為任何交易之依據，使用者依建議或資料內容進行任何投資行為所產生之風險及盈虧，未經自行了解判斷，而導致交易損失風險，應自行負擔，RiusBot不對使用者之投資決策負任何責任。
                </Typography><br/>

                <Typography
                    color="textPrimary"
                    variant="h6"
                >
                    3. RiusBot相關系統中之所有相關連結到其他個人、公司或組織之網站，對被連結之網站或系統上所提供之任何產品、服務或資訊，RiusBot不擔保其正確性、真實性、即時性、及完整性。
                </Typography><br/>

                <Typography
                    color="textPrimary"
                    variant="h6"
                >
                    4. RiusBot對於透過本系統銷售之任何商品，或提供之各項商品行銷活動、廣告，RiusBot均不對其交易安全、商品及服務內容負任何擔保責任，其間之所有交易、擔保、賠償責任及售後服務皆係存在於使用者與商品或勞務提供者之間，使用者應事先詳閱各項規格與活動說明，交易期間如因商品或服務提供者發生任何變故或糾紛，RiusBot不負任何法律責任。
                </Typography><br/>

<Typography
                    color="textPrimary"
                    variant="h6"
                >
                    5. RiusBot使用者同意RiusBot保留修改本聲明之權利，如有變更，將公佈於RiusBot幫助中心網頁上，不另行通知。
                </Typography><br/>


                <Divider variant="middle" />
                    
                <Box
                    sx={{
                        pt: 2,
                        display: 'flex',
                        alignItems: 'center',
                        flexDirection: 'column',
                    }}
                    >
                    <Box
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            margin: 'auto'
                        }}
                        >
                        <Checkbox
                            checked={agreed}
                            name="policy"
                            onChange={(event) => {
                                setAgreed(event.target.checked);
                                setEvent(event);
                            }}
                        />
                        <Typography
                            color="textSecondary"
                            variant="body2"
                        >
                            I agree to the
                            Terms and Conditions
                        </Typography>
                    </Box>
                    <Button
                        color="primary"
                        style={{margin: '0 auto'}}
                        size="small"
                        variant="contained"
                        disabled={!agreed}
                        onClick={() => {
                            accept(event);
                            onClose();
                        }}
                    >
                        Accept
                    </Button>
                </Box>
            </Box>
        </Dialog>
    )

}

export default TermsAndConditionsDialog;
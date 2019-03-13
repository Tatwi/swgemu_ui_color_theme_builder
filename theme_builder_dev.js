// SWG UI Color Theme Builder - By Tatwi
// Begun 2013.01.01
// This script takes the color values from the form and builds them into the format the SWG UI expects to see them. 
// It also generates a basic preview on the right side of the screen.

var colorCodes = new Array(); // This array hold all the variables for color data and SWGEmu UI field names.

// Preloaded Theme Templates
var theme = "null";
var preLTrue = "no";
var preLoadTheme0 = "Name,Default Theme [Midnight Blue] - By Tatwi,AccentDark,24506E,AccentLight,49C1E6,Activated,49C1E6,anim,3A80B0,arrowActivated,49C1E6,arrowdefault,3489A3,arrowDisabled,000000,arrowHover,5CF4FF,arrowSelected,3A80B0,back1,24506E,back2,1C3D54,back3,426478,back4,19364A,back5,000000,backDrop,000000,BaseDark,000000,BaseLight,000000,bottomBar,142D3D,box1,000000,box2,000000,box3,000000,box4,3A80B0,box5,000000,button1,000000,button2,3A80B0,button3,000000,button4,000000,button5,000000,carat,5CF4FF,closeActivated,1A3A4F,closeDarkActivated,1A3A4F,closeDarkHover,5CF4FF,closeDarkNormal,49C1E6,closeHover,5CF4FF,closeNormal,49C1E6,contrast1,5CF4FF,contrast2,5CF4FF,contrast3,FFFFE6,contrast3a,000000,contrast3h,000000,contrast4,49C1E6,contrast4a,000000,contrast5,000000,contrast5a,000000,default,3DA0BF,disabled,265473,disabledObject,B00707,EjectActivated,000000,EjectDefault,000000,EjectHover,000000,equipped,5CF4FF,exp,49C1E6,forceBackground,000000,gamblingActivated,38E83D,gamblingactivated2,04D934,gamblingAllBets,38E83D,gamblingBack,01872D,gamblingCircle,1DAD48,gamblingDefault,00461C,gamblingdefault2,04D934,gamblingDisabled,5B8851,gamblingDisabled2,49923D,gamblingFrame,2BD054,gamblingGlow,2BDB64,gamblingHover,0AA049,gamblinghover2,299642,gamblingJackpot,38E83D,gamblingLights,38E83D,gamblingPlayerBet,38E83D,gamblingPushBet,38E83D,gamblingPushNumber,000000,gamblingRouletteGlow,33DD66,gamblingRouletteText1,183111,gamblingRouletteText2,BFFF80,glow,000000,head1,000000,head2,265473,head3,000000,head4,000000,head5,000000,header,FFFFE6,health,E61B1B,helpBox,000000,Highlight,5CF4FF,holocron,000000,hover,5CF4FF,Icon,3A80B0,iconactivated,49C1E6,icondefault,3A80B0,icondisabled,000000,iconGlow,000000,iconhover,5CF4FF,IconNegative,000000,IconPositive,000000,jedicreate_holocron,000000,jedicreate_lightning,000000,jedicreate_lightning2,000000,lightning,000000,line1,316D96,line2,49C1E6,line3,000000,line4,000000,line5,000000,listback,122736,listHilite,000000,listline,5CF4FF,listtext,5CF4FF,loadBack,5CF4FF,loadBar,2B5F82,loadbarFill,489ED9,mind,0000FA,numActivated,5CF4FF,numDefault,000000,numHover,000000,numTextActivated,000000,numTextDefault,000000,numTextHover,000000,outline1,000000,outline2,000000,outline3,000000,outline4,000000,outline5,000000,OverlayDark,000000,overlayLight,000000,radactivated,49C1E6,radar,24506E,raddefault,2B5F82,raddisabled,122736,radhover,49C1E6,radialTextDark,000000,radialTextLight,FFFFE6,radspin,49C1E6,Runner,49C1E6,runnerDark,000000,scrollactivated,5CF4FF,scrolldefault,3489A3,scrolldisabled,1A3A4F,scrollhover,5CF4FF,scrollselected,000000,selected,000000,selectionBack,000000,skillAcquiredActivated,5CF4FF,skillAcquiredDefault,326E96,skillAcquiredDisabled,000000,skillAcquiredHover,5CF4FF,skillAcquiredSelected,ABEBFF,skillAcquiredTextActivated,FFFFE6,skillAcquiredTextDefault,FFFFE6,skillAcquiredTextHover,1C1C1C,skillactivated,5CF4FF,skilldefault,1A3A4F,skilldisabled,000000,skillhover,5CF4FF,skillselected,000000,skillTextActivated,1C1C1C,skillTextDefault,FFFFE6,slot,49C1E6,spaceGlow,000000,spaceLoading,000000,stamina,25F133,tab1,000000,tab2,000000,tab3,000000,tab4,000000,tab5,000000,tableHeaderTextActivated,000000,tableHeaderTextDefault,49C1E6,tableHeaderTextDisabled,000000,tableHeaderTextHover,5CF4FF,tableHeaderTextSelected,000000,text1,FFFFE6,text2,000000,text3,000000,text4,000000,text5,FFFFE6,textActivated,1C1C1C,TextDark,000000,textdefault,A4D0E0,textDisabled,545454,textHover,1C1C1C,textinsured,FC5D00,TextLight,000000,textMagic,FFFFE6,textMed,000000,textSelected,000000,textServer,000000,textskill,000000,titlebar,142D3D,titleText,FFFFE6,triangleHover,000000,triangleOff,000000,triangleOn,000000,zoneback,000000";
var preLoadTheme1 = "Name,Forest Moon - By Tatwi,AccentDark,028E2D,AccentLight,87D84B,Activated,008828,anim,01C04E,arrowActivated,80FF00,arrowdefault,80FF00,arrowDisabled,008000,arrowHover,DBFF97,arrowSelected,B0F314,back1,7d491f,back2,7d491f,back3,7d491f,back4,7d491f,back5,7d491f,backDrop,7b3100,BaseDark,175B00,BaseLight,61C100,bottomBar,01872D,box1,441b00,box2,441b00,box3,441b00,box4,441b00,box5,441b00,button1,169700,button2,048807,button3,9CDF00,button4,33E01B,button5,33E100,carat,FEDC18,closeActivated,C0FF3E,closeDarkActivated,BFFF80,closeDarkHover,00AE34,closeDarkNormal,BFFF80,closeHover,FFA020,closeNormal,B8FE34,contrast1,33E100,contrast2,DFFF00,contrast3,FFFFFF,contrast3a,1B763F,contrast3h,148020,contrast4,28FF38,contrast4a,21FE42,contrast5,269B2D,contrast5a,E7FF91,default,26BB4B,disabled,009500,disabledObject,FF0000,EjectActivated,ff0000,EjectDefault,ff0000,EjectHover,ffc000,equipped,33E100,exp,33E100,forceBackground,25C063,gamblingActivated,F96400,gamblingactivated2,04D934,gamblingAllBets,E6D500,gamblingBack,01872D,gamblingCircle,1DAD48,gamblingDefault,00461C,gamblingdefault2,04D934,gamblingDisabled,5B8851,gamblingDisabled2,49923D,gamblingFrame,2BD054,gamblingGlow,2BDB64,gamblingHover,0AA049,gamblinghover2,299642,gamblingJackpot,E65600,gamblingLights,F96400,gamblingPlayerBet,F96400,gamblingPushBet,064AFF,gamblingPushNumber,000000,gamblingRouletteGlow,33DD66,gamblingRouletteText1,183111,gamblingRouletteText2,BFFF80,glow,01C04E,head1,DAFF46,head2,D2FF20,head3,D2FF20,head4,D2FF20,head5,D2FF20,header,DFFE63,health,FF0000,helpBox,D2FF20,Highlight,FFFFFF,holocron,01C04E,hover,02803A,Icon,b67346,iconactivated,85FF66,icondefault,FFFFFF,icondisabled,FFFFFF,iconGlow,ffffff,iconhover,BFFF80,IconNegative,DF0000,IconPositive,20FF00,jedicreate_holocron,B3FF4A,jedicreate_lightning,5EFF46,jedicreate_lightning2,6AF702,lightning,BFFF80,line1,01C04E,line2,01943C,line3,80FF00,line4,80FF00,line5,80FF00,listback,21853F,listHilite,01E071,listline,28FF38,listtext,C9FE4B,loadBack,04AE22,loadBar,0D4411,loadbarFill,7AD202,mind,0000FA,numActivated,26BB4B,numDefault,26BB4B,numHover,029142,numTextActivated,003515,numTextDefault,C8FF95,numTextHover,D9FF80,outline1,80FF00,outline2,80FF00,outline3,80FF00,outline4,80FF00,outline5,80FF00,OverlayDark,146B37,overlayLight,45DC82,radactivated,00AE34,radar,441b00,raddefault,018F3A,raddisabled,009500,radhover,018F3A,radialTextDark,F1FFA4,radialTextLight,F5FF82,radspin,018F3A,Runner,01C04E,runnerDark,ffffff,scrollactivated,FF6D15,scrolldefault,00972E,scrolldisabled,217430,scrollhover,93E001,scrollselected,FF6D15,selected,048E35,selectionBack,00AE34,skillAcquiredActivated,00AE34,skillAcquiredDefault,0F863F,skillAcquiredDisabled,217430,skillAcquiredHover,7b4018,skillAcquiredSelected,ffffff,skillAcquiredTextActivated,DAFF46,skillAcquiredTextDefault,112B00,skillAcquiredTextHover,FFE346,skillactivated,7b4018,skilldefault,441b00,skilldisabled,1c0b00,skillhover,7b4018,skillselected,ffffff,skillTextActivated,00AE34,skillTextDefault,DAFF46,slot,0F863F,spaceGlow,ffffff,spaceLoading,ffffff,stamina,00FA00,tab1,00FF00,tab2,4FF046,tab3,1CFF1C,tab4,61C100,tab5,FFFF00,tableHeaderTextActivated,EDFF84,tableHeaderTextDefault,BFFF80,tableHeaderTextDisabled,00C600,tableHeaderTextHover,BDFE36,tableHeaderTextSelected,EDFF84,text1,BFFF80,text2,78E104,text3,53EB0A,text4,8CFF1A,text5,005500,textActivated,EDFF84,TextDark,004000,textdefault,C6FD8E,textDisabled,00C600,textHover,CBFC81,textinsured,F47A00,TextLight,80FF00,textMagic,AAF807,textMed,8FBB0B,textSelected,C6FD8E,textServer,ffffff,textskill,FFC600,titlebar,441b00,titleText,BFFF80,triangleHover,B5E903,triangleOff,01872d,triangleOn,26BB4B,zoneback,ffffff";
var preLoadTheme2 = "Name,Testing - All Grey [A8A8A8],AccentDark,A8A8A8,AccentLight,A8A8A8,Activated,A8A8A8,anim,A8A8A8,arrowActivated,A8A8A8,arrowdefault,A8A8A8,arrowDisabled,A8A8A8,arrowHover,A8A8A8,arrowSelected,A8A8A8,back1,A8A8A8,back2,A8A8A8,back3,A8A8A8,back4,A8A8A8,back5,A8A8A8,backDrop,A8A8A8,BaseDark,A8A8A8,BaseLight,A8A8A8,bottomBar,A8A8A8,box1,A8A8A8,box2,A8A8A8,box3,A8A8A8,box4,A8A8A8,box5,A8A8A8,button1,A8A8A8,button2,A8A8A8,button3,A8A8A8,button4,A8A8A8,button5,A8A8A8,carat,A8A8A8,closeActivated,A8A8A8,closeDarkActivated,A8A8A8,closeDarkHover,A8A8A8,closeDarkNormal,A8A8A8,closeHover,A8A8A8,closeNormal,A8A8A8,contrast1,A8A8A8,contrast2,A8A8A8,contrast3,A8A8A8,contrast3a,A8A8A8,contrast3h,A8A8A8,contrast4,A8A8A8,contrast4a,A8A8A8,contrast5,A8A8A8,contrast5a,A8A8A8,default,A8A8A8,disabled,A8A8A8,disabledObject,A8A8A8,EjectActivated,A8A8A8,EjectDefault,A8A8A8,EjectHover,A8A8A8,equipped,A8A8A8,exp,A8A8A8,forceBackground,A8A8A8,gamblingActivated,A8A8A8,gamblingactivated2,A8A8A8,gamblingAllBets,A8A8A8,gamblingBack,A8A8A8,gamblingCircle,A8A8A8,gamblingDefault,A8A8A8,gamblingdefault2,A8A8A8,gamblingDisabled,A8A8A8,gamblingDisabled2,A8A8A8,gamblingFrame,A8A8A8,gamblingGlow,A8A8A8,gamblingHover,A8A8A8,gamblinghover2,A8A8A8,gamblingJackpot,A8A8A8,gamblingLights,A8A8A8,gamblingPlayerBet,A8A8A8,gamblingPushBet,A8A8A8,gamblingPushNumber,A8A8A8,gamblingRouletteGlow,A8A8A8,gamblingRouletteText1,A8A8A8,gamblingRouletteText2,A8A8A8,glow,A8A8A8,head1,A8A8A8,head2,A8A8A8,head3,A8A8A8,head4,A8A8A8,head5,A8A8A8,header,A8A8A8,health,A8A8A8,helpBox,A8A8A8,Highlight,A8A8A8,holocron,A8A8A8,hover,A8A8A8,Icon,A8A8A8,iconactivated,A8A8A8,icondefault,A8A8A8,icondisabled,A8A8A8,iconGlow,A8A8A8,iconhover,A8A8A8,IconNegative,A8A8A8,IconPositive,A8A8A8,jedicreate_holocron,A8A8A8,jedicreate_lightning,A8A8A8,jedicreate_lightning2,A8A8A8,lightning,A8A8A8,line1,A8A8A8,line2,A8A8A8,line3,A8A8A8,line4,A8A8A8,line5,A8A8A8,listback,A8A8A8,listHilite,A8A8A8,listline,A8A8A8,listtext,A8A8A8,loadBack,A8A8A8,loadBar,A8A8A8,loadbarFill,A8A8A8,mind,A8A8A8,numActivated,A8A8A8,numDefault,A8A8A8,numHover,A8A8A8,numTextActivated,A8A8A8,numTextDefault,A8A8A8,numTextHover,A8A8A8,outline1,A8A8A8,outline2,A8A8A8,outline3,A8A8A8,outline4,A8A8A8,outline5,A8A8A8,OverlayDark,A8A8A8,overlayLight,A8A8A8,radactivated,A8A8A8,radar,A8A8A8,raddefault,A8A8A8,raddisabled,A8A8A8,radhover,A8A8A8,radialTextDark,A8A8A8,radialTextLight,A8A8A8,radspin,A8A8A8,Runner,A8A8A8,runnerDark,A8A8A8,scrollactivated,A8A8A8,scrolldefault,A8A8A8,scrolldisabled,A8A8A8,scrollhover,A8A8A8,scrollselected,A8A8A8,selected,A8A8A8,selectionBack,A8A8A8,skillAcquiredActivated,A8A8A8,skillAcquiredDefault,A8A8A8,skillAcquiredDisabled,A8A8A8,skillAcquiredHover,A8A8A8,skillAcquiredSelected,A8A8A8,skillAcquiredTextActivated,A8A8A8,skillAcquiredTextDefault,A8A8A8,skillAcquiredTextHover,A8A8A8,skillactivated,A8A8A8,skilldefault,A8A8A8,skilldisabled,A8A8A8,skillhover,A8A8A8,skillselected,A8A8A8,skillTextActivated,A8A8A8,skillTextDefault,A8A8A8,slot,A8A8A8,spaceGlow,A8A8A8,spaceLoading,A8A8A8,stamina,A8A8A8,tab1,A8A8A8,tab2,A8A8A8,tab3,A8A8A8,tab4,A8A8A8,tab5,A8A8A8,tableHeaderTextActivated,A8A8A8,tableHeaderTextDefault,A8A8A8,tableHeaderTextDisabled,A8A8A8,tableHeaderTextHover,A8A8A8,tableHeaderTextSelected,A8A8A8,text1,A8A8A8,text2,A8A8A8,text3,A8A8A8,text4,A8A8A8,text5,A8A8A8,textActivated,A8A8A8,TextDark,A8A8A8,textdefault,A8A8A8,textDisabled,A8A8A8,textHover,A8A8A8,textinsured,A8A8A8,TextLight,A8A8A8,textMagic,A8A8A8,textMed,A8A8A8,textSelected,A8A8A8,textServer,A8A8A8,textskill,A8A8A8,titlebar,A8A8A8,titleText,A8A8A8,triangleHover,A8A8A8,triangleOff,A8A8A8,triangleOn,A8A8A8,zoneback,A8A8A8";
var preLoadTheme3 = "Name,Darjani Greenby Uli,AccentDark,555B71,AccentLight,8087A3,Activated,2AB42F,anim,959EBD,arrowActivated,80FF00,arrowdefault,555B71,arrowDisabled,8C919A,arrowHover,8087A3,arrowSelected,959EBD,back1,6B737E,back2,818791,back3,606975,back4,767D88,back5,767D88,backDrop,6A728A,BaseDark,555B71,BaseLight,8087A3,bottomBar,555B71,box1,818791,box2,818791,box3,818791,box4,818791,box5,818791,button1,767D88,button2,606975,button3,979BA3,button4,818791,button5,818791,carat,27FE18,closeActivated,959EBD,closeDarkActivated,959EBD,closeDarkHover,555B71,closeDarkNormal,959EBD,closeHover,33A321,closeNormal,959EBD,contrast1,2CB71C,contrast2,2CB71C,contrast3,2CB71C,contrast3a,2CB71C,contrast3h,2CB71C,contrast4,2CB71C,contrast4a,2CB71C,contrast5,2CB71C,contrast5a,2CB71C,default,6A728A,disabled,8C919A,disabledObject,FF0000,EjectActivated,ff0000,EjectDefault,ff0000,EjectHover,ffc000,equipped,9A9FB1,exp,38E83D,forceBackground,555B71,gamblingActivated,38E83D,gamblingactivated2,04D934,gamblingAllBets,38E83D,gamblingBack,01872D,gamblingCircle,1DAD48,gamblingDefault,00461C,gamblingdefault2,04D934,gamblingDisabled,5B8851,gamblingDisabled2,49923D,gamblingFrame,2BD054,gamblingGlow,2BDB64,gamblingHover,0AA049,gamblinghover2,299642,gamblingJackpot,38E83D,gamblingLights,38E83D,gamblingPlayerBet,38E83D,gamblingPushBet,38E83D,gamblingPushNumber,000000,gamblingRouletteGlow,33DD66,gamblingRouletteText1,183111,gamblingRouletteText2,BFFF80,glow,6A728A,head1,959EBD,head2,6A728A,head3,6A728A,head4,6A728A,head5,6A728A,header,6A728A,health,E61B1B,helpBox,6A728A,Highlight,FFFFFF,holocron,6A728A,hover,38E83D,Icon,85FF66,iconactivated,555B71,icondefault,FFFFFF,icondisabled,FFFFFF,iconGlow,ffffff,iconhover,38E83D,IconNegative,DF0000,IconPositive,20FF00,jedicreate_holocron,B3FF4A,jedicreate_lightning,5EFF46,jedicreate_lightning2,6AF702,lightning,959EBD,line1,555B71,line2,6A728A,line3,8087A3,line4,8087A3,line5,8087A3,listback,8087A3,listHilite,8087A3,listline,555B71,listtext,8087A3,loadBack,606975,loadBar,555B71,loadbarFill,6A728A,mind,0000FA,numActivated,555B71,numDefault,555B71,numHover,959EBD,numTextActivated,003515,numTextDefault,959EBD,numTextHover,8087A3,outline1,6A728A,outline2,6A728A,outline3,6A728A,outline4,6A728A,outline5,6A728A,OverlayDark,555B71,overlayLight,959EBD,radactivated,6A728A,radar,03D356,raddefault,6A728A,raddisabled,8087A3,radhover,555B71,radialTextDark,959EBD,radialTextLight,959EBD,radspin,555B71,Runner,959EBD,runnerDark,ffffff,scrollactivated,555B71,scrolldefault,6A728A,scrolldisabled,848484,scrollhover,606975,scrollselected,555B71,selected,8087A3,selectionBack,000000,skillAcquiredActivated,2AB42F,skillAcquiredDefault,2AB42F,skillAcquiredDisabled,2AB42F,skillAcquiredHover,09550C,skillAcquiredSelected,00FB3B,skillAcquiredTextActivated,72FF2B,skillAcquiredTextDefault,112B00,skillAcquiredTextHover,46FF65,skillactivated,61667A,skilldefault,61667A,skilldisabled,6A728A,skillhover,535766,skillselected,555B71,skillTextActivated,8087A3,skillTextDefault,8087A3,slot,6A728A,spaceGlow,ffffff,spaceLoading,ffffff,stamina,25F133,tab1,818791,tab2,818791,tab3,767D88,tab4,6B737E,tab5,818791,tableHeaderTextActivated,EDFF84,tableHeaderTextDefault,8087A3,tableHeaderTextDisabled,8C919A,tableHeaderTextHover,959EBD,tableHeaderTextSelected,555B71,text1,D8D8D8,text2,D8D8D8,text3,D8D8D8,text4,D8D8D8,text5,D8D8D8,textActivated,D8D8D8,TextDark,D8D8D8,textdefault,D8D8D8,textDisabled,D8D8D8,textHover,D8D8D8,textinsured,D8D8D8,TextLight,D8D8D8,textMagic,D8D8D8,textMed,D8D8D8,textSelected,D8D8D8,textServer,ffffff,textskill,D8D8D8,titlebar,585858,titleText,BDBDBD,triangleHover,8087A3,triangleOff,6A728A,triangleOn,555B71,zoneback,ffffff";
var preLoadTheme4 = "Name,Force Jedi,AccentDark,0A3645,AccentLight,019FEB,Activated,00DD00,anim,2F2FFF,arrowActivated,70DF00,arrowdefault,70DF00,arrowDisabled,023062,arrowHover,5EAEFF,arrowSelected,70DF00,back1,006FE8,back2,015BA5,back3,004EA4,back4,006FE8,back5,006FE8,backDrop,091B95,BaseDark,000000,BaseLight,000000,bottomBar,00D500,box1,034B52,box2,04575E,box3,04575E,box4,00FFFF,box5,00FFFF,button1,00FFF2,button2,6CFDFD,button3,05ABAB,button4,0A869C,button5,007979,carat,97FD31,closeActivated,00239B,closeDarkActivated,45FF0F,closeDarkHover,78B8FE,closeDarkNormal,80FF00,closeHover,FFEE1A,closeNormal,00239B,contrast1,C0FF2D,contrast2,FF6F0F,contrast3,53C7FF,contrast3a,A7E1FE,contrast3h,2C6380,contrast4,17D7FF,contrast4a,F5FF42,contrast5,0316C0,contrast5a,CEEDFF,default,0764FE,disabled,000080,disabledObject,FF0000,EjectActivated,ff0000,EjectDefault,ff0000,EjectHover,ffc000,equipped,6BD700,exp,73E600,forceBackground,0048F0,gamblingActivated,F05A00,gamblingactivated2,16E100,gamblingAllBets,05D9FE,gamblingBack,097DFF,gamblingCircle,006FE8,gamblingDefault,010E7E,gamblingdefault2,16E100,gamblingDisabled,000000,gamblingDisabled2,0C3472,gamblingFrame,80FF00,gamblingGlow,006FE8,gamblingHover,007EE6,gamblinghover2,1465FC,gamblingJackpot,FD3900,gamblingLights,F05A00,gamblingPlayerBet,FF6509,gamblingPushBet,FF35FF,gamblingPushNumber,35013A,gamblingRouletteGlow,24A2FF,gamblingRouletteText1,1F2452,gamblingRouletteText2,80FF00,glow,2F2FFF,head1,05B6B6,head2,0ACDD8,head3,07CDD8,head4,2FF4F4,head5,05CCE2,header,5FFD00,health,FF0000,helpBox,40FFFF,Highlight,FFFFFF,hover,0150D3,Icon,00FF00,iconactivated,00FF00,icondefault,FFFFFF,icondisabled,FFFFFF,iconGlow,ffffff,iconhover,37B8FD,IconNegative,FF0000,IconPositive,00FF00,jedicreate_holocron,00ff00,jedicreate_lightning,1573FF,jedicreate_lightning2,71AAFF,line1,80FF00,line2,80FF00,line3,86FE36,line4,00FFFF,line5,00FFFF,listback,5EBB00,listHilite,6CCFFF,listline,409FFF,listtext,000959,loadBack,0000DD,loadBar,000046,loadbarFill,6AD500,mind,0000FA,numActivated,006FE8,numDefault,006FE8,numHover,00D500,numTextActivated,00D500,numTextDefault,7EC5FE,numTextHover,003166,outline1,00FFFF,outline2,00FFFF,outline3,00FFFF,outline4,09E7FF,outline5,00E0EC,OverlayDark,055CB4,overlayLight,01BFFE,radactivated,80FF00,radar,025AFD,raddefault,0659B5,raddisabled,000080,radhover,62C400,radialTextDark,E6FDFF,radialTextLight,D7FBFF,radspin,2086F7,Runner,00E100,runnerDark,ffffff,scrollactivated,70BEFE,scrolldefault,4179FE,scrolldisabled,0000A8,scrollhover,6FDD00,scrollselected,2F2FFF,selected,0D92FF,selectionBack,0E389A,skillAcquiredActivated,6BD700,skillAcquiredDefault,00DD00,skillAcquiredDisabled,6BD700,skillAcquiredHover,2E9302,skillAcquiredSelected,32BE03,skillAcquiredTextActivated,CAFD00,skillAcquiredTextDefault,030134,skillAcquiredTextHover,CAFD00,skillactivated,0E5CD3,skilldefault,2188EF,skilldisabled,29ABF1,skillhover,0341B4,skillselected,29ABF1,skillTextActivated,D5FBFF,skillTextDefault,D5FBFF,slot,2821BE,spaceGlow,ffffff,spaceLoading,ffffff,stamina,00FA00,tab1,00D6FB,tab2,00FFFF,tab3,00FFFF,tab4,27BECB,tab5,80FFFF,tableHeaderTextActivated,D5FFDC,tableHeaderTextDefault,9BE3FF,tableHeaderTextDisabled,1515FF,tableHeaderTextHover,A8E2FF,tableHeaderTextSelected,77D2FF,text1,B7FAFF,text2,1FE6F5,text3,04575E,text4,CCFF00,text5,013450,textActivated,000066,TextDark,04575E,textdefault,9BE3FF,textDisabled,014BF8,textHover,97E2FF,textinsured,F47A00,TextLight,00FFFF,textMagic,A6FE01,textMed,FFB404,textSelected,001653,textServer,ffffff,textskill,000000,titlebar,00D500,titleText,090D33,triangleHover,CCFE05,triangleOff,0764FE,triangleOn,70DF00,zoneback,ffffff";
var preLoadTheme5 = "Name,Nova Trooper by Caveman,AccentDark,028E2D,AccentLight,87D84B,Activated,DB9A02,anim,E8B900,arrowActivated,E7B301,arrowdefault,E7B301,arrowDisabled,7D5202,arrowHover,FFBF2B,arrowSelected,E7B301,back1,111111,back2,111111,back3,111111,back4,111111,back5,111111,backDrop,DD9102,BaseDark,175B00,BaseLight,61C100,bottomBar,DB9A02,box1,1CAC02,box2,1CAC02,box3,1CAC02,box4,1CAC02,box5,1CAC02,button1,169700,button2,048807,button3,9CDF00,button4,33E01B,button5,33E100,carat,FEDC18,closeActivated,4E2901,closeDarkActivated,FFBB2F,closeDarkHover,FFDD1C,closeDarkNormal,FFBB2F,closeHover,B1E403,closeNormal,4E2901,contrast1,D2FF20,contrast2,FF750F,contrast3,FFFFFF,contrast3a,FF4609,contrast3h,808080,contrast4,FBB40D,contrast4a,FF4609,contrast5,B5FF09,contrast5a,09FFDA,default,E19D00,disabled,955900,disabledObject,FF0000,EjectActivated,ff0000,EjectDefault,ff0000,EjectHover,ffc000,equipped,FFC20D,exp,F97600,forceBackground,EFA801,gamblingActivated,E19D00,gamblingactivated2,CC8A00,gamblingAllBets,FDFDFD,gamblingBack,D19301,gamblingCircle,FEAB12,gamblingDefault,582D01,gamblingdefault2,E19D00,gamblingDisabled,5B3E00,gamblingDisabled2,5B3E00,gamblingFrame,FDB50B,gamblingGlow,BA8301,gamblingHover,B06500,gamblinghover2,A86C1C,gamblingJackpot,25F400,gamblingLights,FF5015,gamblingPlayerBet,FF5015,gamblingPushBet,0169E9,gamblingPushNumber,E6F9FF,gamblingRouletteGlow,FCC418,gamblingRouletteText1,45230A,gamblingRouletteText2,F7BF02,glow,FDD700,head1,05B6B6,head2,FFCD20,head3,FFCD20,head4,FFCD20,head5,FFCD20,header,FFCD20,health,FF0000,helpBox,FFBC20,Highlight,FFFFFF,holocron,FEB918,hover,E4AC01,Icon,FAAF01,iconactivated,FAAF01,icondefault,FFFFFF,icondisabled,FFFFFF,iconGlow,ffffff,iconhover,FFCA28,IconNegative,DF0000,IconPositive,20FF00,jedicreate_holocron,FFC600,jedicreate_lightning,FFD900,jedicreate_lightning2,FFD900,lightning,E8B900,line1,E8B900,line2,E8B900,line3,FFD11A,line4,FFD11A,line5,FFD11A,listback,CA8E02,listHilite,FFD11A,listline,FBDF20,listtext,492501,loadBack,D8A301,loadBar,57371A,loadbarFill,D39F01,mind,0000FA,numActivated,E09801,numDefault,E09801,numHover,FFBE28,numTextActivated,FFBE28,numTextDefault,FFBE28,numTextHover,402D00,outline1,FCBE03,outline2,FCBE03,outline3,FCBE03,outline4,FCBE03,outline5,FCBE03,OverlayDark,6B5614,overlayLight,FED223,radactivated,CC9A02,radar,D79100,raddefault,E49B03,raddisabled,CC9A02,radhover,FEB316,radialTextDark,FDBE00,radialTextLight,482C00,radspin,E49B03,Runner,FEB316,runnerDark,ffffff,scrollactivated,CE9F00,scrolldefault,CE9F00,scrolldisabled,896D01,scrollhover,FFCA2B,scrollselected,FF6D15,selected,805600,selectionBack,6C5700,skillAcquiredActivated,F26802,skillAcquiredDefault,D24602,skillAcquiredDisabled,B15314,skillAcquiredHover,882B02,skillAcquiredSelected,FB5200,skillAcquiredTextActivated,FFDB11,skillAcquiredTextDefault,2D0C00,skillAcquiredTextHover,FFDB11,skillactivated,FF9F0F,skilldefault,FCB612,skilldisabled,008000,skillhover,774400,skillselected,00FF00,skillTextActivated,FFCB2D,skillTextDefault,371C00,slot,B57A02,spaceGlow,ffffff,spaceLoading,ffffff,stamina,00FA00,tab1,DD9B00,tab2,DD9B00,tab3,DD9B00,tab4,DD9B00,tab5,DD9B00,tableHeaderTextActivated,FFCB15,tableHeaderTextDefault,FBBC00,tableHeaderTextDisabled,C67700,tableHeaderTextHover,3F2001,tableHeaderTextSelected,FFCB15,text1,FFCC1C,text2,FFCC1C,text3,FFCC1C,text4,FFCC1C,text5,FFCC1C,textActivated,4E2901,TextDark,402600,textdefault,FECA2C,textDisabled,DD9500,textHover,3E2000,textinsured,F47A00,TextLight,80FF00,textMagic,AAF807,textMed,C66800,textSelected,FFD015,textServer,ffffff,textskill,FFC600,titlebar,DB9A02,titleText,4E2901,triangleHover,E87900,triangleOff,3e2300,triangleOn,E7B301,zoneback,ffffff";
var preLoadTheme6 = "Name,Alpha Blue,AccentDark,0A3645,AccentLight,27BECB,Activated,0BD7E8,anim,1CFFFF,arrowActivated,C4FE12,arrowdefault,86FF00,arrowDisabled,1B737A,arrowHover,77FFFC,arrowSelected,84FFFC,back1,00D6FB,back2,01687E,back3,03546B,back4,00505E,back5,004653,backDrop,00D6FB,BaseDark,0C3F5A,BaseLight,00D6FB,bottomBar,1FE6F5,box1,034B52,box2,04575E,box3,04575E,box4,00FFFF,box5,00FFFF,button1,00FFF2,button2,6CFDFD,button3,05ABAB,button4,0A869C,button5,007979,carat,B6FD31,closeActivated,014052,closeDarkActivated,1FE6F5,closeDarkHover,A8FF24,closeDarkNormal,1FE6F5,closeHover,FFFFFF,closeNormal,014052,contrast1,62FF15,contrast2,FF7417,contrast3,FFFFFF,contrast3a,A7FAFE,contrast3h,000000,contrast4,66FFFF,contrast4a,9DFFFF,contrast5,013234,contrast5a,84F2FF,default,2DAAC6,disabled,014A5A,disabledObject,FF0000,EjectActivated,ff0000,EjectDefault,ff0000,EjectHover,ffc000,equipped,7EF000,exp,6CFD02,forceBackground,00C7EA,gamblingActivated,29FF04,gamblingactivated2,1AC9D2,gamblingAllBets,FF6600,gamblingBack,00D6FB,gamblingCircle,00B7D7,gamblingDefault,022E3C,gamblingdefault2,1AC9D2,gamblingDisabled,000000,gamblingDisabled2,000000,gamblingFrame,00D6FB,gamblingGlow,00A6C4,gamblingHover,04BBE1,gamblinghover2,004E5B,gamblingJackpot,FFEC00,gamblingLights,BDF400,gamblingPlayerBet,00FF00,gamblingPushBet,FF1717,gamblingPushNumber,000000,gamblingRouletteGlow,1CFFFF,gamblingRouletteText1,253745,gamblingRouletteText2,2FF4FF,glow,1CFFFF,head1,05B6B6,head2,0ACDD8,head3,07CDD8,head4,2FF4F4,head5,05CCE2,header,97FFFF,health,FF0000,helpBox,40FFFF,Highlight,00FFFF,holocron,00E6E6,hover,4FEDFF,Icon,70E9FE,iconactivated,00D6FB,icondefault,54E4FE,icondisabled,01687E,iconGlow,54BDFC,iconhover,86FF00,IconNegative,FF0000,IconPositive,00FF00,jedicreate_holocron,B3FE16,jedicreate_lightning,24DEFF,jedicreate_lightning2,20DEFF,lightning,86FF00,line1,1CFFFF,line2,00FFFF,line3,00FFFF,line4,00FFFF,line5,00FFFF,listback,35CBD7,listHilite,00FFFF,listline,37FD06,listtext,003842,loadBack,11EDFF,loadBar,004040,loadbarFill,1BFCF7,mind,0000FA,numActivated,2DAAC6,numDefault,2DAAC6,numHover,46EDFF,numTextActivated,C4F9FD,numTextDefault,C4F9FD,numTextHover,0B3A48,outline1,00FFFF,outline2,00FFFF,outline3,00FFFF,outline4,09E7FF,outline5,00E0EC,OverlayDark,007979,overlayLight,1CFFFF,radactivated,00BFE1,radar,018BA9,raddefault,018BA9,raddisabled,014A5A,radhover,01687E,radialTextDark,ffffff,radialTextLight,ffffff,radspin,0CD8FC,Runner,1CFFFF,runnerDark,ffffff,scrollactivated,6CFD02,scrolldefault,01B5C9,scrolldisabled,1CFFFF,scrollhover,79FFFF,scrollselected,1CFFFF,selected,038D9C,selectionBack,3DF4FE,skillAcquiredActivated,7BFE1B,skillAcquiredDefault,01B805,skillAcquiredDisabled,01B805,skillAcquiredHover,007706,skillAcquiredSelected,32BE03,skillAcquiredTextActivated,F9FF09,skillAcquiredTextDefault,003C3C,skillAcquiredTextHover,FEEF3D,skillactivated,006A7D,skilldefault,005162,skilldisabled,005162,skillhover,00A9B7,skillselected,005162,skillTextActivated,C4FFFF,skillTextDefault,A8FFFF,slot,01687E,spaceGlow,ffffff,spaceLoading,07D2FE,stamina,00FA00,tab1,00D6FB,tab2,00FFFF,tab3,00FFFF,tab4,27BECB,tab5,80FFFF,tableHeaderTextActivated,00ECFF,tableHeaderTextDefault,2FF4FF,tableHeaderTextDisabled,028BA8,tableHeaderTextHover,18393D,tableHeaderTextSelected,00ECFF,text1,96F4FC,text2,005155,text3,06555B,text4,064A47,text5,04575E,textActivated,00393E,TextDark,04575E,textdefault,2FF4FF,textDisabled,028BA8,textHover,18393D,textinsured,F47A00,TextLight,FF8040,textMagic,AAF807,textMed,FFB404,textSelected,D2FDFF,textServer,ffffff,textskill,BBE903,titlebar,1FE6F5,titleText,00354F,triangleHover,C9FB00,triangleOff,32EBFA,triangleOn,48F200,zoneback,ffffff";
var preLoadTheme7 = "Name,Protean,AccentDark,1E2D2B,AccentLight,FFFFFF,Activated,4E8B92,anim,9AD6CE,arrowActivated,77CECE,arrowdefault,80BBBA,arrowDisabled,000000,arrowHover,FFFFFF,arrowSelected,91AEAE,back1,417A7E,back2,214041,back3,224142,back4,356262,back5,1D4540,backDrop,38696D,BaseDark,2B403F,BaseLight,B6C9C7,bottomBar,417A7E,box1,5F9C9B,box2,A001E4,box3,C2FF0D,box4,6618E7,box5,3F2080,button1,982BE1,button2,631FE0,button3,0000A0,button4,F45000,button5,FFFFFF,carat,FFFFFF,closeActivated,A5CDCF,closeDarkActivated,A5CDCF,closeDarkHover,FFFFFF,closeDarkNormal,76B3B6,closeHover,FFFFFF,closeNormal,76B3B6,contrast1,FEAE1B,contrast2,A7EE02,contrast3,00E8E8,contrast3a,043DFF,contrast4,FFFFFF,contrast4a,E9FC5F,contrast5,55B5C6,contrast5a,64FFC1,default,437E83,disabled,72928A,disabledObject,FE2121,EjectActivated,FF0000,EjectDefault,FF0000,EjectHover,FFC000,equipped,C0C0C0,exp,DDA600,forceBackground,4F9499,gamblingActivated,EAB600,gamblingactivated2,4F9299,gamblingAllBets,FFFFFF,gamblingBack,4F969B,gamblingCircle,7EBABE,gamblingDefault,254649,gamblingdefault2,4F9299,gamblingDisabled,000000,gamblingDisabled2,0D0D0D,gamblingFrame,55A8A6,gamblingGlow,7EBABE,gamblingHover,84D0D0,gamblinghover2,1B3234,gamblingJackpot,FF3806,gamblingLights,EAB600,gamblingPlayerBet,EAB600,gamblingPushBet,80FF00,gamblingPushNumber,000000,gamblingRouletteGlow,63C1C7,gamblingRouletteText1,1F3032,gamblingRouletteText2,98BCBB,glow,45AB9E,head1,05B6B6,head2,000000,head3,000000,head4,000000,head5,000000,header,94D6D6,health,FF0000,helpBox,000000,Highlight,7BC4C4,holocron,55A8A6,hover,80B3B3,Icon,55D7D7,iconactivated,55D7D7,icondefault,55D7D7,icondisabled,437E83,iconGlow,89BCC7,iconhover,AAD2D5,IconNegative,FF3333,IconPositive,5CFF2D,jedicreate_holocron,4F9499,jedicreate_lightning,81BABE,jedicreate_lightning2,73B1B7,lightning,9AD6CE,line1,9AD6CE,line2,9AD6CE,line3,00FFFF,line4,00FFFF,line5,00FFFF,listback,568F8C,listHilite,000000,listline,FFFFFF,listtext,E3EDEE,loadBack,5C8F94,loadBar,0B3335,loadbarFill,32CBCB,mind,0000FA,numActivated,437E83,numDefault,437E83,numHover,97D9D6,numTextActivated,C4DFE1,numTextDefault,C4DFE1,numTextHover,101E1F,outline1,9AD6CE,outline2,9AD6CE,outline3,9AD6CE,outline4,9AD6CE,outline5,9AD6CE,OverlayDark,44A69A,overlayLight,C9E9E4,radactivated,437E83,radar,55A8A6,raddefault,437E83,raddisabled,86A29C,radhover,37686C,radialTextDark,D9ECEC,radialTextLight,D9ECEC,radspin,76C5C2,Runner,9AD6CE,runnerDark,216BB6,scrollactivated,77CECE,scrolldefault,73BBB6,scrolldisabled,9AD6CE,scrollhover,C5D7DA,scrollselected,9AD6CE,selected,447B78,selectionBack,000000,skillAcquiredActivated,EA7B00,skillAcquiredDefault,EA7B00,skillAcquiredDisabled,DDA600,skillAcquiredHover,FFFEF9,skillAcquiredSelected,DDA600,skillAcquiredTextActivated,EAF4F4,skillAcquiredTextDefault,ECF4F4,skillAcquiredTextHover,000000,skillactivated,55A8A6,skilldefault,55A8A6,skilldisabled,55A8A6,skillhover,316261,skillselected,55A8A6,skillTextActivated,FFFFFF,skillTextDefault,FFFFFF,slot,73ACB0,spaceGlow,417A7E,spaceLoading,FFFFFF,stamina,00FA00,tab1,00FF00,tab2,4FF046,tab3,1CFF1C,tab4,61C100,tab5,FFFF00,tableHeaderTextActivated,C9DEDE,tableHeaderTextDefault,BEC8CB,tableHeaderTextDisabled,9EB4AE,tableHeaderTextHover,CAD7DB,tableHeaderTextSelected,C9DEDE,text1,D5E6E3,text2,EEEEEE,text3,1ADBB5,text4,EEEEEE,text5,000000,textActivated,B8D3D3,TextDark,10524B,textdefault,8BBABA,textDisabled,9EB4AE,textHover,DBE3E6,textinsured,F47A00,TextLight,4B9E9A,textMagic,A5F400,textMed,3D7A79,textSelected,E0ECED,textServer,FFFFFF,textskill,BBE903,titlebar,417A7E,titleText,ADE7E1,triangleHover,C9FB00,triangleOff,32EBFA,triangleOn,48F200,zoneback,43696D,";

function templateLoader(theme, preLTrue, userLoadedTheme){
	var loadTheme = "null";
	// Clear fields before use.
	document.getElementById('myTheme').value = ""; 
	document.getElementById('themeSaver').value = ""; 
	document.getElementById('userLoad').value = ""; 

	// Load a preloaded theme into the array, else load the one the user has pasted into the Load Variables text box.	
	if (preLTrue=="yes"){
		/* If the "theme" arguement passed to this function is the same as one of the variable names that hold the the preloaded theme data, 
			then make the value of x equal the value of the requested variable. This pains my ass, but it works...
		*/
		if (theme=='preLoadTheme0'){
			var x = preLoadTheme0;		
		}
		if (theme=='preLoadTheme1'){
			var x = preLoadTheme1;		
		}
		if (theme=='preLoadTheme2'){
			var x = preLoadTheme2;		
		}
		if (theme=='preLoadTheme3'){
			var x = preLoadTheme3;		
		}
		if (theme=='preLoadTheme4'){
			var x = preLoadTheme4;		
		}
		if (theme=='preLoadTheme5'){
			var x = preLoadTheme5;		
		}
		if (theme=='preLoadTheme6'){
			var x = preLoadTheme6;		
		}
		if (theme=='preLoadTheme7'){
			var x = preLoadTheme7;		
		}
		
		loadTheme = x;
		preLTrue="no";
	}
	else {	
		// Load user provided variables from a previous session into the array. These variables are passed to this function when pressing the Load button under the Load Variables text box.
		loadTheme = userLoadedTheme;
	}
	
	// Make the one long string variable loadTheme into an array of variables, by splitting them as comma seperated values.
		// NOTE: Zero is the word Name and 1 is the name of the theme.
		// NOTE: Positive numbers are the item names, while odd numbers are the color codes.
	colorCodes = loadTheme.split(',');
  	
	// Output Section Begins  	
  	
	//	Set the title of the theme.
	document.getElementById('themeName').value = colorCodes[1];
	
	// Load the variables into the table of color code pickers.	
	// Starts at 2 because the theme name take the first two spots.
	// Uses the names stored in the even numbers of the array to find the correct html id, then tells jscolor to update the color value with the odd number in the array, which are the theme's color values.
	for (var i=2;i<colorCodes.length;i++)
	{
		changeColor = i +1; // i is the html id name, changeColor is the value of the color.
			
		if (i % 2 == 0)
			{
				document.getElementById(colorCodes[i]).color.fromString(colorCodes[changeColor]);
			}
	}
}


function magicBuild(form)
{
	/* Update the array with the user selected color changes.
		Steps for this section:
			1. Start the loop counting at the colorCodes array position 2, because we don't want to use the Name,Theme Name entries.
			2. Check to make sure the counter, i, is an even number.
			3. Use the counter number to pull the correct item name out of the colorCodes array.
			4. Use that item name to get the VALUE (which is an html color code that user selected) of the corresponding element id.
			5. Make a variable(placeUserNumb) that is one more than counter.
			7. Update the colorCodes array with the user selected color codes.
			8. Repeat loop until all of the values in the array have been updated.
			9. Move on to the next section, where the updated data in the colorCodes array is formated for the user to use.
	*/	
	for (var i=2;i<colorCodes.length;i++)
	{
		 if (i % 2 == 0)
			{
				var userNumb = document.getElementById(colorCodes[i]).value;
				var placeUserNumb = i + 1;
				//alert(placeUserNumb + " Should be 1 more than " + i);
				colorCodes[placeUserNumb] = userNumb; 
			} 
	}

	// Output Section Begins  	

	//	Set the title of the theme.
	var userThemeName = document.getElementById('themeName').value;
	colorCodes[1] = userThemeName;


	// Print out the colors from the array into the format the game expects.
	form.elements['myTheme'].value = ""; // Clear field before use.

	form.elements['myTheme'].value ="<Palette\n";	
	for (var i=2;i<colorCodes.length;i++)
	{
		if (i=="224"){
			form.elements['myTheme'].value += "Name='" + colorCodes[1] + "'\n";
			form.elements['myTheme'].value += "notcolor_ZoneAsteroid1='111'\n";
			form.elements['myTheme'].value += "notcolor_ZoneAsteroid2='111'\n";
			form.elements['myTheme'].value += "notcolor_ZoneDefault1='111'\n";
			form.elements['myTheme'].value += "notcolor_ZoneDefault2='111'\n";
			form.elements['myTheme'].value += "notcolor_ZoneHyperspace1='111'\n";
			form.elements['myTheme'].value += "notcolor_ZoneHyperspace2='111'\n";
			form.elements['myTheme'].value += "notcolor_ZoneMissionCritical1='111'\n";
			form.elements['myTheme'].value += "notcolor_ZoneMissionCritical2='111'\n";
			form.elements['myTheme'].value += "notcolor_ZoneSelect1='111'\n";
			form.elements['myTheme'].value += "notcolor_ZoneSelect2='111'\n";
			form.elements['myTheme'].value += "notcolor_ZoneShip1='111'\n";
			form.elements['myTheme'].value += "notcolor_ZoneShip2='111'\n";
			form.elements['myTheme'].value += "notcolor_ZoneSpaceStation1='111'\n";
			form.elements['myTheme'].value += "notcolor_ZoneSpaceStation2='111'\n";
			form.elements['myTheme'].value += "notcolor_ZoneWapointPoiActive2='111'\n";
			form.elements['myTheme'].value += "notcolor_ZoneWaypointActive1='111'\n";
			form.elements['myTheme'].value += "notcolor_ZoneWaypointActive2='111'\n";
			form.elements['myTheme'].value += "notcolor_ZoneWaypointInactive1='111'\n";
			form.elements['myTheme'].value += "notcolor_ZoneWaypointInactive2='111'\n";
			form.elements['myTheme'].value += "notcolor_ZoneWaypointPoiActive1='111'\n";
			form.elements['myTheme'].value += "notcolor_ZoneWaypointPoiInactive1='111'\n";
			form.elements['myTheme'].value += "notcolor_ZoneWaypointPoiInactive2='111'\n";
		}
	form.elements['myTheme'].value += colorCodes[i] + "='#";
		i++;
	form.elements['myTheme'].value += colorCodes[i] + "'\n";
	}
	form.elements['myTheme'].value +="/>";
	

	// Print out the variables so they can be saved and loaded in again later.
	form.elements['themeSaver'].value = ""; // Clear field before use.

	for (var i=0;i<colorCodes.length;i++)
	{
		form.elements['themeSaver'].value += colorCodes[i];
		if (i!="387"){
			form.elements['themeSaver'].value += ",";
		}
	}
		
}	



function toggle(it) {
	// This function toggles the size of the pictures in the title bar of the page. It's not really useful at this time.
  if (it.width == 60)
    {it.width = 600;}
  else
    {it.width = 60;}
}

// Convert a default SWG xml color palette into variables that can be used with this tool.
function parsePalette(palette){
	// Remove white space and tabs
	palette = palette.trim();
	palette = palette.replace(/\t/g, "");
	
	// Make comma separated
	palette = palette.replace("<Palette", "");
	palette = palette.replace("/>", "");
	palette = palette.replace(/='#/g, ",");
	palette = palette.replace("='", ",");
	palette = palette.replace(/'/g, ",");
	
	// Get palette name
	var namePos = palette.search("Name,");
	var palName = palette.slice(namePos);
    var nameEndPos = palette.search("notcolor_ZoneAsteroid1");
	palName = palette.substring(namePos, nameEndPos);
	
	// Remove palette name
	palette = palette.replace(palName, "");
	
	// Remove unused values
	palette = palette.replace(/^.*notcolor.*$/mg, "");
	
	// Put palette name back at the start
	var retValue = palName + palette;
 
 	// Remove new lines
    retValue = retValue.replace(/\n/g, "");
    
    // Remove trailing comma
    retValue = retValue.replace(/,\s*$/, "");
	
	return retValue;
}

function processXML(vars){
	var output = parsePalette(vars)
	
	// Load theme into editor
	templateLoader('null', 'no', output);
	
	// Output theme to Save Variable box
	document.getElementById('themeSaver').value = output;
}

function clearField(field) {
    document.getElementById(field).value = "";
}

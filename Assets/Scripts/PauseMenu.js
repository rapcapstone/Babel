var guiSkin : GUISkin;

var PlayerController : UnityStandardAssets.Characters.FirstPerson.FirstPersonController;
var FPSControl : GameObject;
var PlayerCapsule : GameObject;

private var savedTimeScale : float;
private var onPause;

/*
enum Navigation
{
    None, Pause, Resume, Options, MainMenu, Quit
}
*/

function Start()
{
    onPause = false;
}

function Update()
{
    if(Input.GetKeyDown(KeyCode.P))
    {
        onPause = !onPause;
        
        if(onPause)
        {
            savedTimeScale = Time.timeScale;
            Time.timeScale = 0.0001;
        }
        else
        {
            Time.timeScale = savedTimeScale;
        }
    }
    
    if(onPause)
    {
        //currentPage = Navigation.Pause;
        Cursor.visible = true;
        Screen.lockCursor = false;
        
        PlayerController = FPSControl.GetComponent("FirstPersonController");
        PlayerController.enabled = false;
        
        //PlayerCapsule.GetComponent("CapsuleCollider").enabled = false;
        
    }
    else
    {
        //currentPage = Navigation.None;
        Cursor.visible = false;
        Screen.lockCursor = true;
        
        PlayerController = FPSControl.GetComponent("FirstPersonController");
        PlayerController.enabled = true;
        
        //PlayerCapsule.GetComponent("CapsuleCollider").enabled = true;
    }
    
}

function OnGUI()
{
    if (guiSkin != null) {
		GUI.skin = guiSkin;
	}
    if(onPause)
    {   
        //GUI.skin.GetStyle ("label").fontSize = 40;
        //public Rect(x: float, y: float, width: float, height: float)
        GUI.Label(new Rect((Screen.width/2)-300, (Screen.height/2)-150, 600, 200), "Game Paused");
        
        // Vertical group for Pause menu
		//GUILayout.BeginVertical ("box",GUILayout.Height(Screen.height/2),GUILayout.Width(Screen.width/2));
        GUILayout.BeginArea (Rect ((Screen.width/2)-150, (Screen.height/2)-25, 300, 200));
        
        //GUI.skin.button.hover.textColor = Color.cyan;
            
            //Applying transparent background color to all buttons.
            GUI.backgroundColor = Color.clear;
            //Pause menu buttons
            if(GUILayout.Button("Resume",GUILayout.Height (50)))
            {
                onPause = false;
                Time.timeScale = savedTimeScale;
            }
            if(GUILayout.Button("Restart",GUILayout.Height (50)))
            {
<<<<<<< HEAD
                Application.LoadLevel(1);
=======
                Application.LoadLevel("level_two");
>>>>>>> 7061d23f4d37ce6eec7e089c36ad7ecf8223a49d
                Time.timeScale = 1.0;
                onPaused = false;
            }
            if(GUILayout.Button("Main Menu",GUILayout.Height (50)))
            {
<<<<<<< HEAD
                Application.LoadLevel(0);
                Time.timeScale = 1.0;
                onPaused = false;
=======
                //Application.Quit();
                Application.LoadLevel("MainMenu");
                Time.timeScale = 1.0;
                onPaused = false;
                //Time.timeScale = 1.0;
                //onPaused = false;
>>>>>>> 7061d23f4d37ce6eec7e089c36ad7ecf8223a49d
            }
        //GUILayout.EndVertical();
        GUILayout.EndArea ();
    }
}
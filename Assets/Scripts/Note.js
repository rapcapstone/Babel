var Note : GameObject;
var NoteUIImage : GameObject;
//var UI : GameObject;
var FPSControl : GameObject;
//var PlayerController : FirstPersonController;
var PlayerController : UnityStandardAssets.Characters.FirstPerson.FirstPersonController;
var FPSCamera : GameObject;
var CameraBlur : Component;


private var InRange; //if player is in range to view the note.
private var Display; //if note is displayed on screen.
private var savedTimeScale : float;

public var guiSkin : GUISkin;

function Start () {
    Display = false;
    
    //Image NoteImage = NoteUIImage.GetComponent<Image>();
    //var NoteImage = NoteUIImage.GetComponent(Image);
	//FPSCamera FPSControl = FPSScript.GetComponent<FirstPersonController>();
    //var FPSScript = FPSControl.GetComponent.<Script>();
    //FPSControl.GetComponent(Script).enabled = true;
    //FPSControl.GetComponent("FirstPersonController").enabled = true;
    //FPSControl.Find("Player").GetComponent<FirstPersonController>().enabled = false;
    
}

function Update () {
    if(Input.GetKeyDown(KeyCode.E) && InRange == true)
    {
        if(Display == false){
            Display = true;
            
            //Freeze time to prevent player movement.
            savedTimeScale = Time.timeScale;
            Time.timeScale = 0.0001;
        }
        else{
            Display = false;
            
            Time.timeScale = savedTimeScale;
        }
    }
    
    if(Display == true){
        //NoteImage.enabled = true;
        NoteUIImage.SetActive(true);
        //UI.SetActive(true);
        //this.GetComponent<Renderer>().enabled = false;
        //this.GetComponent<Collider>().enabled = false;
        //FPSControl.enabled = false;
        //FPSControl.SetActive(false);
        PlayerController = FPSControl.GetComponent("FirstPersonController");
        PlayerController.enabled = false;
        //FPSCamera.GetComponent("BlurEffect").SetActive(true);    //enables the blur on Player Camera.
        CameraBlur = FPSCamera.GetComponent("BlurEffect");
        CameraBlur.enabled = true;
    }
    else{
        //NoteImage.enabled = false;
        NoteUIImage.SetActive(false);
        //UI.SetActive(false);
        //this.GetComponent<Renderer>().enabled = true;
        //this.GetComponent<Collider>().enabled = true;
        //FPSControl.enabled = true;
        //FPSControl.SetActive(true);
        PlayerController = FPSControl.GetComponent("FirstPersonController");
        PlayerController.enabled = true;
        //CharacterController = FPSControl.GetComponent("FirstPersonController");
        //CharacterController.enabled = true;
        //FPSCamera.GetComponent(BlurEffect).active() = false;    //disables the blur on Player Camera.
        //FPSCamera.GetComponent("BlurEffect").SetActive(false);
        CameraBlur = FPSCamera.GetComponent("BlurEffect");
        CameraBlur.enabled = false;
    }
}

//checks if player is next to the note.
function OnTriggerEnter (theCollider : Collider)
{
	if (theCollider.tag == "Player")
	{
		InRange = true;
	}
}

function OnTriggerExit (theCollider : Collider)
{
	if (theCollider.tag == "Player")
	{
		InRange = false;
	}
}

function OnGUI ()
{
	if(InRange == true && Display == false)
	{
		GUI.skin = guiSkin;
		GUI.Label (Rect (Screen.width/2-100, (Screen.height/2)+175, 200, 50), "Press <b>E</b> to look at <b>note</b>");
	
	}

}
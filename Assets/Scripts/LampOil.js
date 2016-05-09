var buttonActivated;
//var OilRefillAudio : AudioClip;
//var PlayerLamp : GameObject;

public var guiSkin : GUISkin;

private static var refill : float = 10;

private var InRange;
private var Exists = true;

function Update () {
    if(InRange == true)
    {
        if(Input.GetKeyDown(KeyCode.E))
        {
            if(Exists)
            {
                //AudioSource.PlayClipAtPoint(OilRefillAudio, transform.position);
                PlayerLamp.AddOil(refill);
                Destroy(gameObject);
                Exists = false;
            }
        }
    }

}

function OnTriggerEnter (oilCollider : Collider)
{
    InRange = true;
}

function OnTriggerExit (oilCollider : Collider)
{
    InRange = false;
}

function OnGUI()
{
    if(InRange == true)
    {
        GUI.skin = guiSkin;
        GUI.Label (Rect (Screen.width/2-100, (Screen.height/2)+175, 200, 50), "Press <b>E</b> to pick up <b>lamp oil</b>"); 
    }
    /*
    else if(InRange == true && PlayerLamp.active == false)
    {
        GUI.skin = guiSkin;
        GUI.Label (Rect (Screen.width/2-50, Screen.height/2-55, 120, 50), "You do not have a lamp."); 
    }
    */
}

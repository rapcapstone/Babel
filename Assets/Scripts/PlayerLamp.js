var PlayerLamp : GameObject;
var PlayerLampLight : GameObject;
var PlayerLampFlame : GameObject;

private static var refill : float = 25;

private var State = 0;  //Lift/on = 1, Lower/off = 0

//Lamp Oil
private static var Oil : float = 0;
private var CurrentOil : float = 0;
private var OilUsage : float = .5;
private var OilCapacity : float = 100;


function Start () {
    //Initialize lamp oil : 50%
    Oil = .5 * OilCapacity;
    
    //Initialize lamp light : off
    LampOff();
    
    //Lock flame particle rotation.
    //PlayerLampFlame.GetComponent.<ParticleSystem>().transform.eulerAngles.x = 0.388395;
    //PlayerLampFlame.GetComponent.<ParticleSystem>().transform.eulerAngles.z = 0.5908886;
    //PlayerLampFlame.GetComponent.<ParticleSystem>().transform.eulerAngles.z = -0.388395;
}

function Update () {
    //PlayerLampFlame.GetComponent.<ParticleSystem>().transform.rotation.y = (main camera)transform.rotation.y 
    CurrentOil = Oil;
    //Checks if there is oil.
    if(Oil > 0)
    {
        //Toggle lamp on/off.
        if (Input.GetKeyDown(KeyCode.F) && State == 0)
        {
            //PlayerLamp.GetComponent.<Animation>().Play("LiftLamp");
            State = 1;
            LampOn();
        }
        else if(Input.GetKeyDown(KeyCode.F) && State == 1)
        {
            //PlayerLamp.GetComponent.<Animation>().Play("LowerLamp");
            State = 0;
            LampOff();
        }
    }
    else if(Oil <= 0)
    {
        Oil = 0;
        State = 0;
        LampOff();
    }
    
    if(State == 1)
    {
        Oil -= Time.deltaTime * OilUsage;
    }
}

function LampOn() {
    //Enable lamp light.
    PlayerLampLight.GetComponent.<Light>().range = 4.5;
    PlayerLampLight.GetComponent.<Light>().intensity = 2.5;
    PlayerLampFlame.GetComponent.<ParticleSystem>().enableEmission = true;
}

function LampOff() {
    //Disable lamp light.
    PlayerLampLight.GetComponent.<Light>().range = 0;
    PlayerLampLight.GetComponent.<Light>().intensity = 0;
    PlayerLampFlame.GetComponent.<ParticleSystem>().enableEmission = false;
}

static function AddOil (amount : int)
{
    //Oil = Mathf.Clamp(Oil+refill, 0, 100);
    Oil = Oil+refill;
}
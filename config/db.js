
{
  users: [
     {
       id: 1,
       name: "name"
    }
   ],
   associates: [
      {
        id: 1,
        owner_id: 1,
        user_id: 1, //optonal
        name: "name", //optonal
        email: "email" //optonal
        type: "type" //friend/family
       }
    ],
   challenges: [
      {
        id: 1,
        owner_id: 1,
        name: "name",
        mountains: [
           {
             id: 1,
           }
         ],
         members: [
            {
              associate_id: 1,
              status: "status",
              invite_sent: 2018-05-15
            }
          ],
       }
    ],
    activities: [
       {
         id: 1,
         name: "name",
         challenge: 1,
         members: [
          {
            challenge_member_id: 1
          }
         ],
        mountains: [
         {
           mountain_id: 1
         }
        ]
       }
     ],
     classifications: [
        {
          id: 1,
          name: "name",
          mountains: [
          {
            mountain_id: 1
          }
         ]
        }
      ],
      mountains: [
         {
           id: 1,
           name: "name",
           height: 1,
           lat: 1,
           lng: 1
         }
       ],
};

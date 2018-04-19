const INITIAL_STATE = {
   homeGridHandle:{ 
        videoPlayer:{
            open: true,
            position:'leftTop',
            size:'normal'
        },
        topicSummaryTabs:{
            open:true,
            position:'leftBottom'
        },
        nodeMap:{
            open:true,
            position:'right'
        },
        leftSide: true,
        rightSide:true,
        fullScreen:false     
    },
    quiz:{
        viewQuizModalVisibility: false
    }

};

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'Node_Map_Maximize':
            return {
                ...state,
                 homeGridHandle:{ 
                    videoPlayer:{
                        size:'mini',
                        open: false,
                        position:'leftTop',
                    },
                    topicSummaryTabs:{
                        open:false,
                        position:'leftBottom'
                    },
                    nodeMap:{
                        open:true,
                        position:'fullScreen',
                        maximize:true
                    },
                    leftSide: false,
                    rightSide:true,
                    fullScreen:true      
                }
            }

        case 'Node_Map_Minimize':
            return {
                ...state,
                 homeGridHandle:{ 
                    videoPlayer:{
                        size:'normal',
                        open: false,
                        position:'leftTop',
                    },
                    topicSummaryTabs:{
                        open:false,
                        position:'leftBottom'
                    },
                    nodeMap:{
                        open:true,
                        position:'fullScreen',
                        maximize:false
                    },
                    leftSide: true,
                    rightSide:true,
                    fullScreen: false      
                }
        }

        case 'Video_Player_Size_Handle':
        return {
            ...state,
            homeGridHandle:{ 
               videoPlayer:{
                   open: false,
                   position:'leftTop',
                   size: action.payload

               },
               topicSummaryTabs:{
                   open:false,
                   position:'leftBottom'
               },
               nodeMap:{
                   open:true,
                   position:'fullScreen',
                   maximize:false
               },
               leftSide: true,
               rightSide:true,
               fullScreen: false      
           }
        }

        case 'view_quiz_modal_visibility_handle':
        return {
            ...state,
            quiz: {
                viewQuizModalVisibility: action.payload
            }
        } 
        default:
            return {
                ...state
        }
    }
}
